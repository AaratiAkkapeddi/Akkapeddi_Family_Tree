
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
/*<><><><><><><><><><><><><><><><><><><><>*/


 var personSchema = mongoose.Schema({
   name: {type: String, required: true, unique: true},
   about: String,
   image: String,
   // spouse: [spouseSchema],
   // children:[personSchema],
   birthday:{type:Number, default:0},
   alive:{type: Boolean, default: true},
   age:{type:Number,default:0},
 });

 // var spouseSchema = mongoose.Schema({
 //   name: {type: String, required: true, unique: true},
 //   about: String,
 //   image: String,
 //   birthday:{type:Number, default:0},
 //   alive:{type: Boolean, default: true},
 //   divorced:{type: Boolean, default: false},
 //   age:{type:Number,default:0},
 // });

 var person = mongoose.model('person', personSchema);
 // var spouse = mongoose.model('spouse', spouseSchema);

module.exports = person;
