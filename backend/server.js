// Inside server.js//

// Lets use some of the packages we've installed
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const newRouter = require("./router.js");

const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());

//The names we're using below were defined in the last post
MongoClient.connect("mongodb://localhost:27017") // This is the location of where your local database is living.
  .then((client) => {
    const db = client.db("email_db"); // The name we gave our DB
    const emailCollection = db.collection("email"); // The name we gave our collection inside the DB
    const emailRouter = newRouter(emailCollection); // We haven't built the router functionality yet, but we will next!

    app.use("/api/email", emailRouter); // Defining the base route where we can later access our data
  })
  .catch(console.err);

app.listen(4000, function () {
  console.log(`Listening on this port: ${this.address().port}`);
});
