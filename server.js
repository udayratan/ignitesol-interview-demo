const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan")
const router = require("./routes");
const ApiMessages = require("./config/ApiMessages");
const ResponseServices = require("./services/ResponseServices");


const app = express();

app.use(cors({ 'origin': '*' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan(':method :status :url :response-time ms'));
app.use('/', router);
app.use(async (req, res, next) => {
    let msg = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
    let Result = { success: false, extras: { code: 2, msg: ApiMessages.API_NOT_AVAILABLE, Req: msg } };
    await ResponseServices.Common_Response_Handler(res, Result);
});
const port = process.env.port || 3355;
app.listen(port, () => console.log("Ignitesol Demo Project Running on ", port));
