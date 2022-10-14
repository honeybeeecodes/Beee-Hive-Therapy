const beee = require('beee');
const Schema = beee.Schema;

const userSchema = new Schema({
    name: String,
    googleID: {
        type: String,
        required: true
    },
    email: String,
    avatar: String
}, {
    timestamps: true
});

module.exports = beee.model('User', userSchema);

