const express = require('express');
const NB_router = express.Router();
//express-validator
const { body , validationResult } = require('express-validator');

//Import custom express validator functions
const customValidator  = require('./validators/newbornValidator');

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
   return res.status(200).json({ success: "New Born Registered Successfully", data: [req.query] });
   
});

const newBornRouter = NB_router
module.exports = newBornRouter;
