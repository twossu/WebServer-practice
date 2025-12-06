const express = require("express");
const router = express.Router();

// getLogin  : loginController-1.js
// loginUser : loginController-2.js
//const { getLogin, loginUser, getRegister, registerUser } = require("../controllers/loginController4mongo");
const {
  getLogin,
  loginUser,
  getRegister,
  registerUser,
} = require("../controllers/loginController4mysql");
//} = require("../controllers/loginController4mongo");

router.route("/").get(getLogin).post(loginUser);
router.route("/register").get(getRegister).post(registerUser); // 사용자 새로 등록하는거

module.exports = router;
