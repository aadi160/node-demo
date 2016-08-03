/**
 * Created by aditya on 1/8/16.
 */

"use strict";

var config = require('../../lib/config');
var tournamentsModel=require('../../models/tournaments');
var jsonHandler=require('../../lib/responseHandler');
var util=require('util');

var post= function(req, res) {
    var params=req.data;
    tournamentsModel.create(params,function(err,data){
        if(err && !data){
            util.log("[ERR] "+err);
            return;
        }
        res.json(jsonHandler.response(200,"success",data));
    })
};

module.exports = post;

if (require.main === module) {
    (function () {
        var req={
        data:{
            name:"d",
            buy_in:"Sd",
            starting_stack:1233,
            blind_level:"fddff",
            blind_interval:"sdsd",
            late_ent:"zxcx",
            prize:"sdfd"}
        };
        var res = {
            json: function (result) {
                console.log(JSON.stringify(result, null, 2));
            }
        };
        post(req,res);
    })();
}
