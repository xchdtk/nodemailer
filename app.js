const express = require("express");

app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', require("./routes/index"))

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(3000, () => {
    console.log('server is running');
})