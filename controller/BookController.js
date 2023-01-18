let BookController = function () { };
const ResponseServices = require("../services/ResponseServices");
const ApiMessages = require("../config/ApiMessages");
const BookServices = require("../services/BookServices");
const CommonServices = require("../services/CommonServices");


BookController.Filter_All_Books = async (req, res) => {
    try {
        let values = JSON.parse(JSON.stringify(req.query));
        let Result = await BookServices.Filter_All_Books(values);
        await ResponseServices.Common_Response_Handler(res, Result);
    } catch (error) {
        await ResponseServices.Common_Response_Handler(res, error);
    }
};


module.exports = BookController;