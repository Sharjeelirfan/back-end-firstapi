import express from "express";
import { users } from "./MOCK_DATA.js";
// const express = require("express");
// const user = require("./MOCK_DATA.json");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello  !");
});

app.get("/user", (req, res) => {
  res.send(users);
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  const user = users.users[id];
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("User not found");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
