const express = require("express");
const app = express();

const PORT = process.env.PORT || "5000";

app.use(express.static("public"));

app.get("/index.html", (req, res, next) => {
  res.send("public/index.html");
});

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT} port!`);
});
