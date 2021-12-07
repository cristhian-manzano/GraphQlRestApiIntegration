require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const connectDb = require("./config/db");

const app = express();
connectDb();

app.use(helmet());
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

const PORT = process.env.APP_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
