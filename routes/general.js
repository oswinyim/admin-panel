import express from "express";
import { getDashBoardStats, getUser } from "../controller/general.js";
const router = express.Router();

router.get("/user/:id", getUser);
router.get("/dashboard", getDashBoardStats);
export default router;
