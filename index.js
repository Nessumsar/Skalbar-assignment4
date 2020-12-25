const express = require('express');
const port = process.env.PORT || 8000;
const app = express();
const pages = require('./routes/pages');
const secure = require('./routes/secure');


app.use(express.json())
app.use(express.static('public'))
app.use('/secure', secure);
app.use('/', pages);


app.listen(port, () =>{
    console.log("starting server");
});