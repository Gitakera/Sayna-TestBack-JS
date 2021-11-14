const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const userSchema = mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique:true },
  date_naissance: { type: Date, required: true },
  token: {  type: String, required: false },
  password: { type: String, required:true},
  createdAt: { type: Date, required: true, default: Date.now},//, expires: 43200 },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User',userSchema);