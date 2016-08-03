/**
 * Created by aditya on 1/8/16.
 */

"use strict";

var config = require('../../lib/config');
var tournamentScheduleModel=require('../../models/tournamentschedule');
var tournamentModel=require('../../models/tournaments');
var jsonHandler=require('../../lib/responseHandler');
var util=require('util');

var post= function(req, res) {
    var params=req.data;
    tournamentModel.findById({_id:params.tournament_id},function (err,data) {
        if(err && !data){
            util.log("[ERR] "+err);
            res.json(jsonHandler.response(400,"failed",err));
            return;
        }
        params.tournament_name=data.name;
        tournamentScheduleModel.create(params,function(err,data){
            if(err && !data){
                util.log("[ERR] "+err);
                return;
            }
            res.json(jsonHandler.response(200,"success",data));
        });
    })

};

module.exports = post;

if (require.main === module) {
    (function () {
        var req={
            data:{
                name:"d",
                tournament_id:"57a084b2d64451ae52c07a27",
                prize:"40000000"
            }
        };
        var res = {
            json: function (result) {
                console.log(JSON.stringify(result, null, 2));
            }
        };
        post(req,res);
    })();
}
