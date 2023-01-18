let BookServices = function () { };
const { Op } = require("sequelize");

const ResponseServices = require("./ResponseServices");
const Model_Associates = require("../model/Model_Associates");
const Authors = require("../model/Authors");
const Books = require("../model/Books");
const Bookshelves = require("../model/Bookshelves");
const Book_Authors = require("../model/Book_Authors");
const Book_Bookshelves = require("../model/Book_Bookshelves");
const Book_Downloads = require("../model/Book_Downloads");
const Book_Languages = require("../model/Book_Languages");
const Book_Subjects = require("../model/Book_Subjects");
const Languages = require("../model/Languages");
const Subjects = require("../model/Subjects");
const CommonServices = require("./CommonServices");



BookServices.Filter_All_Books = (values) => {
    return new Promise(async (resolve, reject) => {
        try {
            let page = parseInt(values.page) || 1;
            let limit = 25;
            let offset = (page * limit) - limit;
            let Author_Groups = {
                model: Authors,
                as: 'All_Authors',
                where: {}
            };
            let Shelves_Group = {
                model: Bookshelves,
                as: 'All_Bookshelves',
                where: {}
            };
            let Download_Group = {
                model: Book_Downloads,
                as: 'All_Downloads',
                where: {}
            };
            let Language_Group = {
                model: Languages,
                as: 'All_Languages',
                where: {}
            };
            let Subject_Group = {
                model: Subjects,
                as: 'All_Subjects',
                where: {}
            };
            if (values.language) {
                let code = await CommonServices.str_to_array(values.language, ',');
                Language_Group.where.code = code;
            }
            if (values.mime_type) {
                let mime_type = await CommonServices.str_to_array(values.mime_type, ',');
                Download_Group.where.mime_type = mime_type;
            }
            if (values.author) {
                let name = await CommonServices.str_to_like_string(values.author);
                Author_Groups.where.name = {
                    [Op.like]: name
                };
            }
            let query = {
                offset: offset,
                limit: limit,
                subQuery: false,
                distinct: true,
                order: [
                    ['download_count', 'DESC'],
                ],
                include: [
                    Author_Groups,
                    Shelves_Group,
                    Download_Group,
                    Language_Group,
                    Subject_Group,
                ],
                where: {

                },
            };
            if (values.book_id) {
                let gutenberg_id = await CommonServices.str_to_integer_array(values.book_id, ',');
                query.where.gutenberg_id = gutenberg_id;
            }
            if (values.title) {
                let title = await CommonServices.str_to_like_string(values.title);
                query.where.title = {
                    [Op.like]: title
                };
            }
            if (values.topic) {
                let topic = await CommonServices.str_to_like_string(values.topic);
                let orCond = {
                    [Op.or]: [
                        {
                            '$All_Subjects.name$': {
                                [Op.like]: topic
                            }
                        },
                        {
                            '$All_Bookshelves.name$': {
                                [Op.like]: topic
                            }
                        }
                    ]
                }
                query.where = Object.assign({}, query.where, orCond);
            }
            let Data = await Books.findAndCountAll(query);
            resolve({ success: true, extras: { Data: Data } })
        } catch (error) {
            reject(await ResponseServices.Common_Error_Handler(error));
        }
    });
}

module.exports = BookServices;