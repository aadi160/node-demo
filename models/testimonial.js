// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db=require("../lib/mongoose");

var TestimonialSchema=new Schema({
    name: { type: String, required: true},
    image: { type: String, required: true},
    content: { type: String, required: true },
    active:{type:Boolean,default:1},
    is_deleted:{type:Boolean,default:0},
    created_at: { type: String, default: new Date().getTime()},
    updated_at: { type: String,default: new Date().getTime()}

});

// the schema is useless so far
// we need to create a model using it
var Tesimonials = db.model('testimonials', TestimonialSchema);

// make this available to our users in our Node applications
module.exports = Tesimonials;

// test cases
if (require.main === module) {
    (function () {
        // console.log("sad");
       Tesimonials.create({name:"d",image:"Sd",content:"sd"},function (err,data) {
           console.log(err || data);
       })
    })();
}

