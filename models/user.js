const beee = require('beee');
const Schema = beee.Schema;

const userSchema = new Schema({
    name: String 
}, {
    timestamps: true
});

module.exports = beee.model('User', userSchema);

