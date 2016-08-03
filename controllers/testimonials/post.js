/**
 * Created by aditya on 1/8/16.
 */

"use strict";

var config = require('../../lib/config');
var testimonialmodel=require('../../models/testimonial')
var jsonHandler=require('../../lib/responseHandler');
var util=require('util');

var testimonial = function(req, res) {
    var params=req.data;
    var testimonial={
        name:params.name,
        content:params.content,
        image:params.image,
    }
    // return testimonial;
    testimonialmodel.create(testimonial,function(err,data){
        if(err && !data){
            util.log("[ERR] "+err);
            return
        }
        res.json(jsonHandler.response(200,"success",data));
    })
};

module.exports = testimonial;

if (require.main === module) {
    (function () {
        var req={
        data:{
            name:"test",
            content:"test",
            image:"test.png",
        }};
        var res = {
            json: function (result) {
                console.log(JSON.stringify(result, null, 2));
            }
        };
        testimonial(req,res);
    })();
}
