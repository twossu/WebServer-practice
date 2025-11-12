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
router.route("/").get(getAllContacts);
router.route("/add").get(addContactForm).post(createContact); // GET: contactRoutes-4.js POST: contactRoutes-5.js
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
