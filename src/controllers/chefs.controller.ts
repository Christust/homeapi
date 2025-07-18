import { Request, Response } from "express";
import { ChefHandler } from "../handlers";
import { RequestDTO } from "../dtos/request";

class ChefController {
  private readonly _handler: ChefHandler;

  constructor() {
    this._handler = new ChefHandler();
  }

  public findAll = async (req: Request, res: Response) => {
    const requestDTO = new RequestDTO(req.query);
    const records = await this._handler.findAll(requestDTO);
    res.status(200).json(records);
  }

  public findOne = async (req: Request, res: Response) => {
    const { id } = req.params;
    const record = await this._handler.findOne(Number(id));
    if (!record) {
      res.status(404).json({ message: "Chef not found" });
      return;
    }
    res.status(200).json(record);
  }

  public create = async (req: Request, res: Response) => {
    const newChef = req.body;
    const record = await this._handler.create(newChef);
    if (!record) {
      res.status(400).json({ message: "Error creating chef" });
      return;
    }
    res.status(201).send();
  }

  public update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const record = await this._handler.findOne(Number(id));
    if (!record) {
      res.status(404).json({ message: "Chef not found" });
      return;
    }
    const updatedChef = req.body;
    const updatedCount = await this._handler.update(Number(id), updatedChef);
    if (updatedCount === 0) {
      res.status(404).json({ message: "Chef not updated" });
      return;
    }
    res.status(204).send();
  }

  public delete = async (req: Request, res: Response) => {
    const { id } = req.params;
    const record = await this._handler.findOne(Number(id));
    if (!record) {
      res.status(404).json({ message: "Chef not found" });
      return;
    }
    const deletedCount = await this._handler.delete(Number(id));
    if (deletedCount === 0) {
      res.status(404).json({ message: "Chef not deleted" });
      return;
    }
    res.status(204).send();
  }
}

export default ChefController;

// const chefHandler = new ChefHandler();
// export default {
//   findAll: async (req: Request, res: Response) => {
//     const chefs = await chefHandler.findAll(new RequestDTO(req.query));
//     res.status(200).json(chefs);
//   },
//   findOne: async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const chef = await chefHandler.findOne(Number(id));
//     if (!chef) {
//       res.status(404).json({ message: "Chef not found" });
//       return;
//     }
//     res.status(200).json(chef);
//   },
//   create: async (req: Request, res: Response) => {
//     const newChef = req.body;
//     const chef = await chefHandler.create(newChef);
//     if (!chef) {
//       res.status(400).json({ message: "Error creating chef" });
//       return;
//     }
//     res.status(201).send();
//   },
//   update: async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const chef = await chefHandler.findOne(Number(id));
//     if (!chef) {
//       res.status(404).json({ message: "Chef not found" });
//       return;
//     }
//     const updatedChef = req.body;
//     const updatedCount = await chefHandler.update(Number(id), updatedChef);
//     if (updatedCount === 0) {
//       res.status(404).json({ message: "Chef not updated" });
//       return;
//     }
//     res.status(204).send();
//   },
//   delete: async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const chef = await chefHandler.findOne(Number(id));
//     if (!chef) {
//       res.status(404).json({ message: "Chef not found" });
//       return;
//     }
//     const deletedCount = await chefHandler.delete(Number(id));
//     if (deletedCount === 0) {
//       res.status(404).json({ message: "Chef not deleted" });
//       return;
//     }
//     res.status(204).send();
//   },
// };
