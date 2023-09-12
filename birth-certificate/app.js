const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();
app.set('view engine', 'ejs');

const newBornRouter = require('./routes/newborn');
const  LReg_router = require('./routes/lateReg');

app.use("/newborn", newBornRouter); // use the user router
app.use("/lateReg", LReg_router); // use the post router

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
