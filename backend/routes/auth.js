const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var fetchuser = require("../middleware/fetchuser");
const JWT_SECRET = "Karanisgooboy";

const app = express();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ROUT 1: create a user using : post "/api/auth/createuser". Dosent require auth No login req
router.post(
  "/createuser",
  [
    body("name", "Enter valid mail").isLength({ min: 3 }),
    body("email", "Enter valid E-mail").isEmail(),
    body("password", "Password must be atleast 5 character").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    success = false;
    // res.json("Create User");
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log("Hello Buddy");
    // Check weather the user exist with same mail or not
    try {
      let user = await User.findOne({ email: req.body.email }); // await is use to run the full request
      if (user) {
        return res.status(400).json({
          success,
          error: "sorry the user with this email already exist",
        });
      }

      // making password more sequire by (bcrypt anfd secPass)
      const salt = await bcrypt.genSalt(10); // generate salt
      secPass = await bcrypt.hash(req.body.password, salt);

      // Create new user
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });

      const data = {
        user: {
          id: user.id,
        },
      };
      console.log("************** data is ***************", data);

      const authToken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server occured");
    }
  }
);
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ROUT 2: Authenticate a user using post "/api/auth/login" No login require
router.post(
  "/login",
  [
    // body('name','Enter valid mail').isLength({min:3}),
    body("email", "Enter valid E-mail").isEmail(),
    body("password", "Password must be atleast 5 character").exists(),
  ],
  async (req, res) => {
    // if there are errors return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success = false;
        return res.status(400).json({
          success,
          error: "Please try to login with correct credentials",
        });
      }

      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);
      console.log(authToken);
      success = true;
      res.json({ success, authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server occured");
    }
  }
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ROUT 3: Get Login user details using "/api/auth/getuser" login require
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Error");
  }
});
module.exports = router;
