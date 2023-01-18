
const CommonServices = function () { };

const ApiMessages = require("../config/ApiMessages");

CommonServices.isNumber = num => {
    if (num != null && num != undefined && String(num) != '' && isFinite(num) && !isNaN(num)) {
        return true;
    } else {
        return false;
    }
};

CommonServices.str_to_array = (str, delimeter) => {
    return String(str).split(delimeter);
};
CommonServices.str_to_integer_array = (str, delimeter) => {
    return String(str).split(delimeter).map(e => parseInt(e));
};
CommonServices.str_to_like_string = (str) => {
    return `%${String(str).toLowerCase()}%`;
};
module.exports = CommonServices;