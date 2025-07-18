import { RequestDTO } from "../dtos/request";
import { ResponseDTO } from "../dtos/response";
import { Chef } from "../entities";
import { ChefRepository } from "../repositories";
import BaseHandler from "./base.handler";

class ChefHandler extends BaseHandler {
  private _repository: ChefRepository;

  constructor() {
    super();
    this._repository = new ChefRepository();
  }
  public async findAll(requestDTO: RequestDTO) {
    // Limit offset logic
    const { limit, offset } = this.getLimitOffset(requestDTO);

    // Use the repository
    const records = await this._repository.findAll();

    // Apply search filter if provided
    if (requestDTO.search) {
      records.where("LOWER(chef.name) LIKE :search", {
        search: `%${requestDTO.search.toLowerCase()}%`,
      });
    }
    // Apply pagination
    records.skip(offset).take(limit);

    // Execute the query and return the results
    const total = await records.getCount();

    return new ResponseDTO(await records.getMany(), total, limit);
  }
  public async findOne(id: number): Promise<Chef | null> {
    const record = await this._repository.findOne(id);
    return record;
  }
  public async create(newRecord: Partial<Chef>) {
    const record = await this._repository.create(newRecord);
    return record;
  }
  public async update(id: number, updatedRecord: Partial<Chef>) {
    const updatedCount = await this._repository.update(id, updatedRecord);
    return updatedCount;
  }
  public async delete(id: number) {
    const deletedCount = await this._repository.delete(id);
    return deletedCount;
  }
}

export default ChefHandler;
