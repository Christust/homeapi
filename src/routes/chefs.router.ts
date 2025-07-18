import { Router } from "express";
import { ChefsController } from "../controllers";
import asyncHandler from "../scripts/trycatcher.scripts";

const router = Router();
const chefsController = new ChefsController();

router.get("/", asyncHandler(chefsController.findAll));
router.get("/:id", asyncHandler(chefsController.findOne));
router.post("/", asyncHandler(chefsController.create));
router.put("/:id", asyncHandler(chefsController.update));
router.delete("/:id", asyncHandler(chefsController.delete));

export default router;
