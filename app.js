const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));


app.listen(PORT, ()=> {
    console.log(`The server is running on ${PORT} port!`);
})