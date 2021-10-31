const mongoose = require("mongoose");

// free MongoDB atlas cluster
const URI =
  "mongodb+srv://anhminhbo:anhminh1234@minhcluster.jm6xt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// create a async function to make the web wait for server to connect to db
const connectDB = async () => {
  await mongoose.connect(URI);
  console.log("db connected...!");
};

module.exports = connectDB;
