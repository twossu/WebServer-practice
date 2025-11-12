const express = require("express");
const app = express();
const dbConnect = require("./config/dbConnect4mongo");
const methodOverride = require("method-override");

const port = 3000;
dbConnect();

app.set("view engine", "ejs");
app.set("views", "./views");
app.engine("html", require("ejs").renderFile);
app.use(express.static("./public"));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.status(200).send("Hello Node!");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//localhost:3000/contacts/3
http: app.use("/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중`);
});
