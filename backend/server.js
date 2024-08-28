import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import users from "./users";
import me from "./me";

const app = express();

app.use(cors());
app.use(bodyParser.json());

// engångslösenord
function generateOTP() {
  const otp = Math.floor(100000 + Math.random() * 900000);
  return otp.toString();
}

const users = ["/users"];
const accounts = ["/me/accounts"];
const sessions = ["/sessions"];

app.listen(port, () => {
  console.log(`Bankens backend körs på http://localhost:${port}`);
});
