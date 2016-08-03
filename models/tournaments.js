// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db=require("../lib/mongoose");

var TournamentSchema=new Schema({
    name: { type: String, required: true},
    buy_in: { type: String, required: true},
    starting_stack: { type: Number, required: true },
    blind_level:{type:String},
    blind_interval:{type:String},
    late_ent:{type:String,required:true},
    prize:{type:String,required:true},
    created_at: { type: String, default: new Date().getTime()},
    updated_at: { type: String,default: new Date().getTime()}

});

// the schema is useless so far
// we need to create a model using it
var Tournaments = db.model('tournaments', TournamentSchema);

// make this available to our users in our Node applications
module.exports = Tournaments;

// test cases
if (require.main === module) {
    (function () {
        Tournaments.create({name:"d",buy_in:"Sd",starting_stack:1233,
            blind_level:"fddff",blind_interval:"sdsd",late_ent:"zxcx",prize:"sdfd"},function (err,data) {
           console.log(err || data);
       })
    })();
}

