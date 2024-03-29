import express from "express";
import cors from "cors";
import db from "./db/db.js";
import dotenv from "dotenv";
import role from "./routes/role.js"
dotenv.config();

const app = express();

app.use(express.json());
// reglas de conexión entre front y back
app.use(cors());
app.use("./api/role", role);

app.listen(process.env.PORT, () =>
  console.log("Backend server running on port: " + process.env.PORT)
);

db.dbConnection();
