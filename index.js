import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const fname=req.body["fName"];
  const lname=req.body["lName"];
  const numLetters = req.body["fName"].length + req.body["lName"].length;
  res.render("index.ejs", { numberOfLetters: numLetters , f:fname,l:lname});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
