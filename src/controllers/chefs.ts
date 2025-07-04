import { Request, Response } from "express";
import { Chef } from "../entities/chef.entity";
import DataSource from "../context";

const chefRepository = DataSource.getRepository(Chef);

export default {
  findAll: async (req: Request, res: Response) => {
    try {
      const newChefs = new Chef();
      newChefs.name = "Chef John Doe";
      await chefRepository.save(newChefs);
      
      const chefs = await chefRepository.find();
      res.status(200).json(chefs);
    } catch (error: any) {
      res.status(500).json({
        message: "Error",
        error: error.message,
      });
    }
  },
};
