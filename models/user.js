const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = mongoose.Schema({
    username: {type: String, default: ''},
    email : {type: String, default : ''},
    password: { type: String, unique: false, default: '' },
    phone: {typr : String , default :''},
    time:[{
        day : {type: String, default: ''},
        inout : [{
            in: {type:String, default:''},
            out:{type:String,default:''}
        }]
    }]
});
userSchema.methods.encryptPassword = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

userSchema.methods.validUserPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User',userSchema);