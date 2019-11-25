const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const adminSchema = mongoose.Schema({
    username: {type: String, default: ''},
    email : {type: String, default : ''},
    password: { type: String, unique: false, default: '' },
    phone: {type : String , default :''},
    address: {type : String , default :''},
    visitors:[{
            name: {type:String, default:'123'},
            email:{type:String,default:'123'},
            phone:{type:String,default:'123'}
    }]
});
adminSchema.methods.encryptPassword = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

adminSchema.methods.validUserPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('Admin',adminSchema);