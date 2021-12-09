require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes/index");
const connectDB = require("./config/db");
const startApolloServer = require("./apolloServer");

// server
const http = require("http");
const app = express();

// Database
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

// Start server
const httpServer = http.createServer(app);
startApolloServer(app, httpServer);
httpServer.listen(PORT, () => console.log(`Server running in port ${PORT}`));
