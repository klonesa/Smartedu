const express = require("express");
const mongoose = require("mongoose");
const pageRoute = require("./routes/pageRoute");
const courseRoute = require("./routes/courseRoute");
const categoryRoute = require('./routes/categoryRoute');

const Course=require('./models/Course');
const app = express();
//Connect DB
mongoose
  .connect("mongodb://localhost/smartedu-db", {
   
    useUnifiedTopology: true,
  
  })
  .then(() => {
    console.log("DB Connected Successfully");
  });

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/", pageRoute);
app.use('/courses', courseRoute);
app.use('/categories', categoryRoute);
const port = 3000;
app.listen(port, () => {
  console.log(`App started  on port ${port}`);
});
