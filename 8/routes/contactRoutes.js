const express = require("express");
const router = express.Router();

const {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
  addContactForm,
} = require("../controllers/contactController4mongo");
//} = require("../controllers/contactController4mysql");

// http://localhost:3000/contacts/3
// 라우터 순서중요
router.route("/").get(getAllContacts);
router.route("/add").get(addContactForm).post(createContact); // GET: contactRoutes-4.js POST: contactRoutes-5.js
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact); //id 수정해야하니깐 put하고 delete있음 필요한거 가져와 쓰면됨

module.exports = router;
