/**
 * Created by aditya on 1/8/16.
 */

"use strict";

var config = require('../../lib/config');
var tournamentScheduleModel=require('../../models/tournamentschedule');
var tournamentModel=require('../../models/tournaments');
var jsonHandler=require('../../lib/responseHandler');
var util=require('util');

var update = function(req, res) {
    var id=req.data.id;
    delete req.data.id;
    tournamentScheduleModel.update({_id:id},{$set:req.data},function (err,schedule) {
        if(err) throw err;
        res.json(jsonHandler.response(200,"updates",schedule));
    })
};

module.exports = update;

if (require.main === module) {
    (function () {
        var req={
            data:{
                id:"57a08f08779189f35a85797f",
                name:"test",
                prize:"3333"
            },
            };
        var res = {
            json: function (result) {
                console.log(JSON.stringify(result, null, 2));
            }
        };
        update(req,res);
    })();
}
