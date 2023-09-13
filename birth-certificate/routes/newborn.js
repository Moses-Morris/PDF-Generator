const express = require('express');
const NB_router = express.Router();

//express-validator
const { body , validationResult } = require('express-validator');
//Import custom express validator functions
const customValidator  = require('./validators/newbornValidator');

//inherit schema from mongoose
const Newborn = require('../models/newbornDB.js');
//connect with mongoose
const mongoose = require('mongoose');
//Create Password 0Ky8KdrsJc7KLFb8
mongoose.connect('mongodb+srv://mosesmorrisdev:0Ky8KdrsJc7KLFb8@cluster0.g9ef0dd.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });





NB_router.get('/', (req, res) => {
    res.render('newborn_form');
});

//Register the NewBorn With Details from the POST form
NB_router.post('/create', customValidator(), (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        // console.log(errors);
        return res.status(400).json({ errors: errors.array() });
    }
   //return res.status(400).json({ errors: errors.array() });

   console.log(req.query);
   const childname = req.query.childname;
   const dob = req.query.dob;
    const fathername = req.query.fathername;
    const FId = req.query.FId;
    const mothername = req.query.mothername;
    const MId = req.query.MId;
    const maiden = req.query.maiden;
    const hospital = req.query.hospital;
    const constituency = req.query.constituency;
    const registerOfficer = req.query.registerOfficer;
    //Create a new user
    const newBornUser = new Newborn({
        childname: childname,
        dob: dob,
        fathername: fathername,
        FId: FId,
        mothername: mothername,
        MId: MId,
        maiden: maiden,
        hospital: hospital,
        constituency: constituency,
        registerOfficer: registerOfficer,
        registerOfficerId: 0,
    });
    //insert the user
    newBornUser.save();

    //logout what is in DB
    const Babies = Newborn.findOne({});
    console.log(Babies);
    return res.status(200).json({ success: "New Born Registered Successfully", data: [req.query] });
   
});

const newBornRouter = NB_router;
module.exports = newBornRouter;
