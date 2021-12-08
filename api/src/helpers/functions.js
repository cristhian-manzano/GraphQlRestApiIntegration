require("dotenv").config();
const bcrypt = require("bcrypt");

const encryptData = async (data) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(data, salt);
};

const compareEncriptedData = async (data, encriptedData) => {
  return bcrypt.compare(data, encriptedData);
};

module.exports = {
  encryptData,
  compareEncriptedData,
};
