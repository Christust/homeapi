import express from "express";
import chefs from "./chefs.router";

// Main router
const router = express.Router();

// Chef routes
router.use("/chefs", chefs);

export default router;