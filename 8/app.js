const express = require("express");
const app = express();
const dbConnect = require("./config/dbConnect4mongo");
const methodOverride = require("method-override"); // put, delete를 하려고 이걸 불러옴
const cookieParser = require("cookie-parser");

const port = 3000;
dbConnect();

app.set("view engine", "ejs");
app.set("views", "./views");
app.engine("html", require("ejs").renderFile);
app.use(express.static("./public"));
app.use(methodOverride("_method"));
app.use(cookieParser());

// app.get("/", (req, res) => {
//   res.status(200).send("Hello Node!");
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // url에 입력된 내용을 서버전송 가능하게 하기위해 아스키 문자로 바꿔줌

//localhost:3000/
app.use("/", require("./routes/loginRoutes"));
//localhost:3000/contacts/3
app.use("/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중`);
});
