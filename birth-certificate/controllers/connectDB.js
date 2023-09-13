const mongoose = require('mongoose');
const Newborn = require('../models/newbornDB.js');

//Create Password 3PZQt6dU82vab4fD
mongoose.connect('mongodb+srv://mosesmorrisdev:3PZQt6dU82vab4fD@cluster0.g9ef0dd.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });


//Create a new user
const newBornUser = new Newborn({
    childname: 'Moses Morris',
    dob: '2021-01-01',
    fathername: 'Morris Gachogu',
    FId: 1234567890,
    mothername: 'Mary Wanjiku',
    MId: 1234567890,
    maiden: 'Ann Millicent',
    hospital: 'Nairobi Hospital',
    constituency: 'Kasarani',
    registerOfficer: 'admin',
    registerOfficerId: 0,
});

//insert the user
newBornUser.save();

//logout what is in DB
const Babies = Newborn.findOne({});
console.log(Babies);