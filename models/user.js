var mongoose = require('mongoose');
// var passportLocalMongoose = require('passport-local-mongoose');
var validator = require('validator');
const Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail,'Please fill a valid email address'],
    required: true
  },
  oauth: {
    type: Object,
  },
  first_name: {
      type: String
  },
  last_name: {
      type: String
  },
  photo: {
      type: String
  },
  doorbells: [{ type: Schema.Types.ObjectId, ref: 'Doorbell' }],
  adminlevel: {
    type: Number,
    default: 0,
    required: true
  },
  facebookId: {
      type: String
  },
  jwtCount: { // used to deny token
    type: Number,
    defualt: 0,
    required: true
  }
});
// UserSchema.plugin(passportLocalMongoose,{usernameField: 'email'}); // plugin to compare password using Bycrpt
UserSchema.static('findOrCreate', async function findOneOrCreate(condition, doc) {
  const one = await this.findOne(condition);

  return one || this.create(doc);
});
var User = mongoose.model('User', UserSchema);

module.exports = User;