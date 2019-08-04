//import express
let express = require("express");
//import Body parser
let bodyParser = require("body-parser");
//Import mongoose
let mongoose = require("mongoose");
//setup the server port
let port = process.env.PORT || 8080;
//import routes
let apiRoutes = require("./routes/routes");
//initialise the app
let app = express();
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

//use routes in the app
app.use("/api", apiRoutes);

//config body parser to handle post requests

//connect to mongoose and set connection var
mongoose.connect("mongodb://localhost/restful", { useNewUrlParser: true });

var db = mongoose.connection;

//send message for default URL
app.get("/", (req, res) => res.send("Hello world yea"));

//Launch app to listen to specified port
app.listen(port, error => {
  if (error) return console.log(`Error ${error}`);

  console.log(`Running RestHub on port ${port}`);
});
