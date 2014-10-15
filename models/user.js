var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	firstName: String,
	lastName: String,
	userName: String
});

module.exports = mongoose.model('User', userSchema);