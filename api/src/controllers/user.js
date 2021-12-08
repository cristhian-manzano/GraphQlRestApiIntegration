const userModel = require("../models/users");

const get = async (req, res) => {
  try {
    const users = await userModel.find({});
    return res.status(200).json(users);
  } catch (e) {
    console.log("🚀 ~ file: user.js ~ line 10 ~ get ~ e", e);
    return res.status(401).json({ msg: e.message });
  }
};

const create = async (req, res) => {
  const user = new userModel(req.body);
  try {
    const userSaved = await user.save();
    return res.status(401).json({ user: userSaved });
  } catch (e) {
    console.log("🚀 ~ file: user.js ~ line 20 ~ create ~ e", e);
    return res.status(401).json({ msg: e.message });
  }
};

const getById = async (req, res) => {
  const id = req.params?.id;

  try {
    const user = await userModel.findById(id);
    if (!user) return res.status(404).json({ msg: "User not found!" });
    return res.status(200).json({ user });
  } catch (e) {
    console.log("🚀 ~ file: user.js ~ line 32 ~ getById ~ e", e);
    return res.status(401).json({ msg: e.message });
  }
};

const update = async (req, res) => {
  const id = req.params?.id;

  try {
    const updatedUser = await userModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (!updatedUser) return res.status(404).json({ msg: "User not found!" });
    return res.status(200).json({ user: updatedUser });
  } catch (e) {
    console.log("🚀 ~ file: user.js ~ line 50 ~ update ~ e", e);
    return res.status(401).json({ msg: e.message });
  }
};

const destroy = async (req, res) => {
  const id = req.params?.id;
  try {
    const isDeleted = await userModel.findByIdAndDelete(id);
    if (!isDeleted) return res.status(404).json({ msg: "User not found!" });
    return res.status(200).json({ msg: "User deleted successfully" });
  } catch (e) {
    console.log("🚀 ~ file: user.js ~ line 57 ~ destroy ~ e", e);
    return res.status(401).json({ msg: e.message });
  }
};

module.exports = {
  get,
  create,
  getById,
  update,
  destroy,
};
