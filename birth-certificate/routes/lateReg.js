const express = require('express');

const LR_router = express.Router();

LR_router.get('/', (req, res) => {
    res.render('lateReg_form');
});

const LReg_router = LR_router;
module.exports = LReg_router;