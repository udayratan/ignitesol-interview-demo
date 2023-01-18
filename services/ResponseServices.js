
const ResponseServices = function () { };

const ApiMessages = require("../config/ApiMessages");

ResponseServices.Common_Response_Handler = (res, Result) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (Result.success) {
                if (!res.headersSent) {
                    resolve(res.status(200).json(Result));
                } else {
                    resolve("Already Sent");
                }
            } else if (!Result.success) {
                if (!res.headersSent) {
                    resolve(res.status(400).json(await ResponseServices.Common_Error_Handler(Result)));
                } else {
                    resolve("Already Sent");
                }
            } else {
                if (!res.headersSent) {
                    resolve(res.status(400).json({ success: false, extras: { code: 2, msg: ApiMessages.SERVER_ERROR } }));
                } else {
                    resolve("Already Sent");
                }
            }
        } catch (error) {
            console.error('Something Response Handler--->', error);
        }
    });
}

ResponseServices.Common_Error_Handler = (error) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (error.success === null || error.success === undefined) {
                console.log("Error-->", error);
                if (error instanceof SyntaxError) {
                    resolve({ success: false, extras: { code: 2, msg: ApiMessages.SERVER_ERROR } })
                } else {
                    resolve({ success: false, extras: { code: 2, msg: ApiMessages.DATABASE_ERROR } })
                }
            } else {
                resolve(error);
            }
        } catch (error) {
            console.error('Something Error Handler--->', error);
        }
    });
};

module.exports = ResponseServices;