const express = require("express");
const app = express();

const PORT = process.env.PORT || 4001;

const index = {
    audi: {
        evjarat: "2001",
        tipus: "tt"
    },
    bmw: {
        evjarat: "2005",
        tipus: "120d"
    }
}

app.use(express.static("public"));

app.get("/index", (req, res) => {
    const isError = index.audi.evjarat;

    if(isError){
        res.send(isError);
    }else{
        res.status(404).send("Error");
    }
});


app.listen(PORT, () => {
  console.log(`The server is running on ${PORT} port!`);
});
