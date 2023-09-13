const  mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const newbornSchema = new Schema({
    childname: {
        type: String,
        required: true,
    },
    dob:{
        type: Date,
        required: true,
    },
    fathername: {
        type: String,
        required: true,
    },
    FId: {
        type: Number,
        required: true,
        length: 10
    },
    mothername: {
        type: String,
        require:true
    },
    MId:{
        type: Number,
        required: true,
        length: 10
    },
    maiden: {
        type: String,
        required: true,
    },
    hospital: {
        type: String,
        required: true,
    },
    constituency: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    registerOfficer: {
        type: String,
        default: 'admin'
    },
    registerOfficerId: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Newborn', newbornSchema);