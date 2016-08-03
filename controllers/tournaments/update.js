/**
 * Created by aditya on 1/8/16.
 */

"use strict";

var config = require('../../lib/config');
var tournamentsModel=require('../../models/tournaments');
var jsonHandler=require('../../lib/responseHandler');
var util=require('util');

var update = function(req, res) {
    var id=req.data.id;
    delete req.data.id;
    tournamentsModel.update({_id:id},{$set:req.data},function (err,testimonial) {
        if(err) throw err;
        res.json(jsonHandler.response(200,"updates",testimonial));
    })
};

module.exports = update;

if (require.main === module) {
    (function () {
        var req={
            data:{
                id:"57a084b2d64451ae52c07a27",
                name:"d",
                buy_in:"Sd",
                starting_stack:1233,
                blind_level:"fddff",
                blind_interval:"sdsd",
                late_ent:"zxcx",
                prize:"sdfd"
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
