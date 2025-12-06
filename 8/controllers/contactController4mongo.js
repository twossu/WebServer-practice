const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel"); //이거 왜가져오징?
const path = require("path");

// contactController-2 ~ contactController-6
// @desc Get all contacts
// @route GET /contacts
const getAllContacts = asyncHandler(async (req, res) => {
  // 전체 연락처 보기
  // res.status(200).send("Contacts Page");
  const contacts = await Contact.find();
  // res.status(200).send(contacts);
  //const filePath = path.join(__dirname, "../assets", "getAll.html");
  //res.sendFile(filePath);
  //res.render("getAll");
  res.render("index", { contacts: contacts });
});

// add가 그려지다
// @desc View add contact form
// @route GET /contacts/add
const addContactForm = (req, res) => {
  res.render("add");
};

// @desc Create a contact
// @route POST /contacts
const createContact = asyncHandler(async (req, res) => {
  // 새 연락처 추가하기
  console.log(req.body);
  const { name, email, phone } = req.body; // 이름 이메일 전화번호를 보냄
  if (!name || !email || !phone) {
    return res.status(400).send("필수값이 입력되지 않았습니다.");
  }

  const contact = await Contact.create({
    name,
    email,
    phone,
  });

  console.log(contact);
  //res.status(201).send("Create Contacts");
  res.redirect("/contacts"); // contacts경로로 보내는듯
});

// @desc Get contact
// @route GET /contacts/:id
const getContact = asyncHandler(async (req, res) => {
  // 연락처 상세 보기
  // res.status(200).send(`View Contact for ID: ${req.params.id}`);
  const contact = await Contact.findById(req.params.id);
  //res.status(200).send(contact);
  res.render("update4mongo", { contact: contact }); // 가져온 값을 contact로 담는다
});

// @desc Update contact
// @route PUT /contacts/:id
const updateContact = asyncHandler(async (req, res) => {
  // 연락처 수정하기
  // res.status(200).send(`Update Contact for ID: ${req.params.id}`);
  const id = req.params.id;
  const { name, email, phone } = req.body;
  const contact = await Contact.findById(id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  // 수정
  contact.name = name;
  contact.email = email;
  contact.phone = phone;

  // 저장
  contact.save(); // 이걸로 저장하면 수정 저장이 되는 거임
  //res.status(200).send("Update Contact");
  //res.status(200).json(contact);
  res.redirect("/contacts");
});

// @desc Delete contact
// @route DELETE /contacts/:id
const deleteContact = asyncHandler(async (req, res) => {
  // 연락처 삭제하기
  // res.status(200).send(`Delete Contact for ID: ${req.params.id}`);
  const contact = await Contact.findById(req.params.id); // 삭제할 아이디를 가져오고
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  await contact.deleteOne(); // 여기서 삭제하는 거임 여기 왜 컨텍트 소문자이냐면 위에 대문자는 테이블 전체를 말하는데 여기도 대문자이면 전체에서 하나씩 지우는 거기에 필요한 것만 지우려고 소문자이다.
  //res.status(200).send(`Delete Contact for ID: ${req.params.id}`);
  res.redirect("/contacts");
});

module.exports = {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
  addContactForm,
}; // 여기서 내보내서 routes/contactRoutes.js 로 보내서 사용할 수 있음
