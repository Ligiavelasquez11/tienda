import express from "express";
import role from "../controllers/role.js";

const router = express.Router()

//http://localhosttp:3001/api/registerRole

router.post("/registerRole", role.registerRole);

export default router