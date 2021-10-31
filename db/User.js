const mongoose = require("mongoose");

const user = mongoose.Schema({
  userName: {
    type: String,
  },
  passWord: {
    type: String,
  },
});

module.exports = User = mongoose.model('User',user);
