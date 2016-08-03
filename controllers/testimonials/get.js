/**
 * Created by aditya on 1/8/16.
 */

"use strict";

var config = require('../../lib/config');
var testimonialmodel=require('../../models/testimonial')
var jsonHandler=require('../../lib/responseHandler');
var util=require('util');

var testimonial = function(req, res) {
   testimonialmodel.find({}).select({_id:0,__v:0}).exec(function(err,data){
        if(err && data){
            util.log("[ERR] "+err);
            return
        }
        res.json(jsonHandler.response(200,"success",data));
    })
};

module.exports = testimonial;

if (require.main === module) {
    (function () {
        var req = {

        };
        var res = {
            json: function (result) {
                console.log(JSON.stringify(result, null, 2));
            }
        };
        testimonial(req,res);
    })();
}
