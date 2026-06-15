const worker = require("../model/workers");

async function getAllWorker(req, res) {
  try {
    const workers = await worker.find();
    res.status(200).json(workers);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
}

async function getAllWorkerById(req, res) {
  try {
    const worker = await worker.findById(req.params.id);
    console.log(req.params.id);

    if (!worker) {
      return res.status(404).json({ message: " couldn't find auser for you." });
    }
    res.status(200).json(worker);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "internal server error.", error: error.message });
  }
}

async function createWorker(req, res) {
  try {
    const newWorker = await worker.create(req.body);
    res.status(201).json(newWorker);
  } catch (error) {
    res
      .status(400)
      .json({ message: "User creation failed", error: error.message });
  }
}

async function deletedWorker(req, res) {
  try {
    const deletedWorker = await User.findByIdAndDelete(req.params.id);
    if (!deletedWorker) {
      return res
        .status(404)
        .json({ message: "worker Not Found for deletion." });
    }
    res
      .status(200)
      .json({ message: "worker deleted successfully", worker: deletedUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
}
module.exports = {
  getAllWorker,
  getAllWorkerById,
  createWorker,
  deletedWorker,
};
