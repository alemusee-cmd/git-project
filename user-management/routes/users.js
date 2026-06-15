const express = require("express");
const {
  getAllUsers,
  getAllUserById,
  createUser,
  deletedUser,
} = require("../controllers/users.controller");

const routes = express.Router();

routes.get("/", getAllUsers);
routes.get("/", getAllUserById);
routes.post("/", createUser);
routes.delete("/:id", deletedUser);

module.exports = routes;
