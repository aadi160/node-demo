"use strict";

var getJson = {
    response: function (code, message, body) {
        var json = {
            head: {
                code: code,
                message: message
            },
            body: {
                data: body
            }
        };
        return json;
    },
    isJson: function (j) {
        try {
            return JSON.parse(j);
        } catch (e) {
            return {};
        }
    }
};

module.exports=getJson;