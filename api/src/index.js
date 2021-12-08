require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");

const routes = require("./routes/index");

const app = express();

(async function db() {
  await connectDB();
})();

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
