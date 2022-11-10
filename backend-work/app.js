require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDb = require("./db/db");
const router = require("./routes/user");
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use("/api/v1", router);
connectDb();

app.listen(port, () => {
  console.log(`Server is up and running on ${port}`);
});
