"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chef_entity_1 = require("../entities/chef.entity");
const context_1 = __importDefault(require("../context"));
const chefRepository = context_1.default.getRepository(chef_entity_1.Chef);
exports.default = {
    findAll: async (req, res) => {
        try {
            const newChefs = new chef_entity_1.Chef();
            newChefs.name = "Chef John Doe";
            await chefRepository.save(newChefs);
            const chefs = await chefRepository.find();
            res.status(200).json(chefs);
        }
        catch (error) {
            res.status(500).json({
                message: "Error",
                error: error.message,
            });
        }
    },
};
