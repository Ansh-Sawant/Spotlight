import express from "express";
import Connection from "./connection/db.js";
import DefaultData from "./default.js";
import Route from "./routes/route.js";
import cors from "cors";

const app = express();
const PORT = 8000;

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use("/", Route);

Connection();
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));

const category = "all";
DefaultData(category);
setInterval(() => DefaultData(category), 3600000);