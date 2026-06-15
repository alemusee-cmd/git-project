const user = require("../model/user");
const User = require("../model/user");

async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
}

async function getAllUserById(req, res) {
  try {
    const user = await user.findById(req.params.id);
    console.log(req.params.id);

    if (!user) {
      return res.status(404).json({ message: " couldn't find auser for you." });
    }
    res.status(200).json(user);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "internal server error.", error: error.message });
  }
}

async function createUser(req, res) {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res
      .status(400)
      .json({ message: "User creation failed", error: error.message });
  }
}

async function deletedUser(req, res) {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User Not Found for deletion." });
    }
    res
      .status(200)
      .json({ message: "User deleted successfully", user: deletedUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
}
module.exports = {
  getAllUsers,
  getAllUserById,
  createUser,
  deletedUser,
};
