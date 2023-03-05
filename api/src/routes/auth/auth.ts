import express, { Router } from "express";
import { register } from "../../controllers/auth/auth";

export const router: Router = express.Router();

router.post("/register", register);

module.exports = router;
