/**
 * Created by aditya on 1/8/16.
 */

"use strict";

var config = require('../../lib/config');
var specialOffersModel=require('../../models/specialOffers')
var jsonHandler=require('../../lib/responseHandler');
var util=require('util');

var post = function(req, res) {
    var params=req.data;
    specialOffersModel.create(params,function(err,data){
        if(err && !data){
            util.log("[ERR] "+err);
            return
        }
        res.json(jsonHandler.response(200,"success",data));
    })
};

module.exports = post;

if (require.main === module) {
    (function () {
        var req={
        data:{
            title:"test",
            content:"test",
            image:"test.png",
        }};
        var res = {
            json: function (result) {
                console.log(JSON.stringify(result, null, 2));
            }
        };
        post(req,res);
    })();
}
