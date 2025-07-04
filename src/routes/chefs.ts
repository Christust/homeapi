import { Router } from "express";
import chefsController from "../controllers/chefs";

const router = Router();

router.get("/", chefsController.findAll);

export default router;
