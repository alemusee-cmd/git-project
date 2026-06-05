const express = require("express");
const {
  getAllUsers,
  getAllUserById,
  createUser,
} = require("../controllers/users.controller");

const routes = express.Router();

routes.get("/", getAllUsers);
routes.get("/", getAllUserById);
routes.post("/", createUser);

module.exports = routes;
