const express = require("express");
const app = express();

const connectDB = require("./db/connection");

const Port = process.env.Port || 3000;

connectDB();

app.use(express.json({ extended: false }));
app.use("/api/userModel", require("./api/user"));

app.listen(Port, () =>
  console.log(`Server started at http://localhost:${Port}`)
);
