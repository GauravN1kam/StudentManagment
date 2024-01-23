const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = 8000;

//imports
const router = require("./routes/route");
const connectDB = require("./db/connectDB");

app.use(express.json());
app.use(cors())
app.use("/", router);


const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
