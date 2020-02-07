const express = require("express");
const app = express();
const authRoutes = require("./routes/auth");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
mongoose.set("useFindAndModify", false);

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB");
  }
);

app.use(express.json());
app.use("/api", authRoutes);
app.listen(80, () => console.log("Server Up. Listening to port 80........."));
