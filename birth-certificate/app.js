const express = require('express');
const PORT = process.env.PORT || 5000;

const app = express();
app.set('view engine', 'ejs');

const newBornRouter = require('./routes/newborn');
const  LReg_router = require('./routes/lateReg');

app.use("/newborn", newBornRouter); // use the user router
app.use("/lateReg", LReg_router); // use the post router

app.get('/', (req, res) => {
    res.render('home')
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
