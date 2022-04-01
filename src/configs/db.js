
const mongoose = require("mongoose");
module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://mbnavins:naveen1998@bookmyshow-clone.ayxfh.mongodb.net/test"
  );
}