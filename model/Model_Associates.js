const Books = require("../model/Books");
const Book_Authors = require("../model/Book_Authors");
const Authors = require("../model/Authors");
const Book_Bookshelves = require("../model/Book_Bookshelves");
const Bookshelves = require("../model/Bookshelves");
const Book_Downloads = require("../model/Book_Downloads");
const Book_Languages = require("../model/Book_Languages");
const Book_Subjects = require("../model/Book_Subjects");
const Languages = require("../model/Languages");
const Subjects = require("../model/Subjects");


let Model_Associates = async () => {

    //Book and authors
    Books.belongsToMany(Authors, {
        through: Book_Authors,
        as: "All_Authors",
        foreignKey: "book_id",
    });
    Authors.belongsToMany(Books, {
        through: Book_Authors,
        as: "All_Books",
        foreignKey: "author_id",
    });


    //Book and shelves
    Books.belongsToMany(Bookshelves, {
        through: Book_Bookshelves,
        as: "All_Bookshelves",
        foreignKey: "book_id",
    });
    Bookshelves.belongsToMany(Books, {
        through: Book_Bookshelves,
        as: "All_Books",
        foreignKey: "bookshelf_id",
    });



    //Book and Downloads
    Books.hasMany(Book_Downloads, {
        as: "All_Downloads",
        foreignKey: "book_id",
    });




    //Book and Languages
    Books.belongsToMany(Languages, {
        through: Book_Languages,
        as: "All_Languages",
        foreignKey: "book_id",
    });
    Languages.belongsToMany(Books, {
        through: Book_Languages,
        as: "All_Books",
        foreignKey: "language_id",
    });


    
    //Book and Subjects
    Books.belongsToMany(Subjects, {
        through: Book_Subjects,
        as: "All_Subjects",
        foreignKey: "book_id",
    });
    Subjects.belongsToMany(Books, {
        through: Book_Subjects,
        as: "All_Books",
        foreignKey: "subject_id",
    });
}



module.exports = Model_Associates();