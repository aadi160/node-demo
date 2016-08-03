/**
 * Created by aditya on 1/8/16.
 */
var get=require("./get");
var post=require("./post");
var update=require("./update");
var testimonial={
    'get':get,
    'post':post,
    'update':update
}

module.exports=testimonial;