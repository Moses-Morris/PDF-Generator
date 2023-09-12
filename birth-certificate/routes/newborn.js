const express = require('express');
const NB_router = express.Router();
//express-validator
const { check , validationResult } = require('express-validator');


NB_router.get('/', (req, res) => {
    res.render('newborn_form');
});

//Register the NewBorn With Details from the POST form
NB_router.post('/create', (req, res) => {
    console.log(req.body);
    res.send('New Born Registered');
});

const newBornRouter = NB_router
module.exports = newBornRouter;
