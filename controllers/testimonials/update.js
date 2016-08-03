/**
 * Created by aditya on 1/8/16.
 */

"use strict";

var config = require('../../lib/config');
var testimonialmodel=require('../../models/testimonial')
var jsonHandler=require('../../lib/responseHandler');
var util=require('util');

var testimonial = function(req, res) {
    var id=req.data.id;
    delete req.data.id;
    testimonialmodel.update({_id:id},{$set:req.data},function (err,testimonial) {
        if(err) throw err;
        res.json(jsonHandler.response(200,"updates",testimonial));
    })
};

module.exports = testimonial;

if (require.main === module) {
    (function () {
        var req={
            data:{
                id:"57a06c4c0e98ff4f3a7dadf7",
                name:"awosome",
                content:"testsdfdf",
            },
            };
        var res = {
            json: function (result) {
                console.log(JSON.stringify(result, null, 2));
            }
        };
        testimonial(req,res);
    })();
}
