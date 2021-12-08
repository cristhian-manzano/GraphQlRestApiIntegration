const express = require("express");
const { get, getById, create } = require("../controllers/user");

const route = express.Router();

route.get("/", get).get("/:id", getById).post("/", create);

module.exports = route;
