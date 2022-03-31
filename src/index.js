require("dotenv").config();
const express = require("express");
const connect = require("./configs/db");
const cors = require("cors");
const userController = require("./controllers/user.controller");
const bagController = require("./controllers/bag.controller");
const { register, login } = require("./controllers/auth.controller");
const { body } = require("express-validator");

// //----------------product page controllers-----------------//
// const womenController = require("./controllers/womenController");
// const womenshoeController = require("./controllers/womenshoeController");
// const menController = require("./controllers/menController");
// const homeController = require("./controllers/homeController");
// const lifestyleController = require("./controllers/lifestyleController");
// //-------------------//------------------------------//----------//

const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", userController);
app.use("/bag", bagController);



app.post("/register", body("email").notEmpty(), register);
app.post("/login", login);

app.listen(process.env.PORT || 5500, async function () {
  try {
    await connect();
    console.log("app is listening on port 5500");
  } catch (err) {
    console.log(err.message);
  }
});
