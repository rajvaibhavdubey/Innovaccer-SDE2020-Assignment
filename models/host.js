const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const hostSchema = mongoose.Schema({
    username: {type: String, default: ''},
    email : {type: String, default : ''},
    password: { type: String, unique: false, default: '' },
    phone: {typr : String , default :''},
    visitors:[{
        details : [{
            name: {type:String, default:''},
            email:{type:String,default:''},
            phone:{type:String,default:''}
        }]
    }]
});
hostSchema.methods.encryptPassword = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

hostSchema.methods.validUserPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('Host',hostSchema);