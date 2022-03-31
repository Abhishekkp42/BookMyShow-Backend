
const mongoose = require("mongoose");
module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://bookmyshow:bookmyshow@bookmyshow.kteht.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
}