"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chefs_1 = __importDefault(require("./chefs"));
// Main router
const router = express_1.default.Router();
// Chef routes
router.use("/chefs", chefs_1.default);
exports.default = router;
