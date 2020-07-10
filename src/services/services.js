import express from "express";
import path from "path";
import dotenv from "dotenv";
import compression from "compression";

import pointsData from './data/pointsData.json'
import { connectDB } from "./dbConnector";
import { matchReports } from "./match-reports";

// to load env valiable from .env
dotenv.config();

const port = process.env.SERVER_PORT;
const app = express();

// add compression
app.use(compression());

// app.use((req, res, next) => {
//     console.log("middleware for all requests");
//     next();
// });

// app.use("/reports", matchReports);

// app.use("/public/assets/", express.static(path.join(__dirname, "../../build")));

app.use("/redux-sample", (req, res, next) => {
  console.log("middleware for redux-sample requests");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.static(path.join(__dirname, '../../build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.get("/points", (req, res) => {
  res.json(pointsData);
});

app.get("/sample", (req, res) => {
  res.send("sample1");
});

app.get("/connect-db", (req, res) => {
  connectDB().then((data) => {
    console.log("connect-db", data);
    res.send(data);
  });
});

app.listen(port);
console.log(
  `-------- server started at port no ${port} in ${process.env.NODE_ENV} --------`
);
