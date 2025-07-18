import DataSource from "../context";
import { Chef } from "../entities";

class ChefRepository {
  private _context;

  constructor() {
    this._context = DataSource.getRepository(Chef);
  }

  public async findAll() {
    const records = await this._context.createQueryBuilder("chef");
    return records;
  }
  public async findOne(id: number) {
    const record = await this._context
      .createQueryBuilder("chef")
      .where("chef.id = :id", { id })
      .getOne();
    return record;
  }
  public async create(newRecord: Partial<Chef>) {
    const record = await this._context
      .createQueryBuilder()
      .insert()
      .into(Chef)
      .values(newRecord)
      .execute();
    return record;
  }
  public async update(id: number, updatedRecord: Partial<Chef>) {
    const record = await this._context
      .createQueryBuilder()
      .update(Chef)
      .set(updatedRecord)
      .where("id = :id", { id })
      .execute();
    return record.affected;
  }
  public async delete(id: number) {
    const record = await this._context
      .createQueryBuilder()
      .delete()
      .from(Chef)
      .where("id = :id", { id })
      .execute();
    return record.affected;
  }
}

// const chefRepositoryMethods = {
//   findAll: async () => {
//     // const offset = (requestDTO.page - 1) * (requestDTO.limit || 10);
//     const chefs = await chefRepository.createQueryBuilder("chef")
//     return chefs;
//   },
//   findOne: async (id: number) => {
//     const record = await chefRepository
//       .createQueryBuilder("chef")
//       .where("chef.id = :id", { id })
//       .getOne();
//     return record;
//   },
//   create: async (newRecord: Partial<Chef>) => {
//     const record = await chefRepository
//       .createQueryBuilder()
//       .insert()
//       .into(Chef)
//       .values(newRecord)
//       .execute();
//     return record;
//   },
//   update: async (id: number, updatedRecord: Partial<Chef>) => {
//     const record = await chefRepository
//       .createQueryBuilder()
//       .update(Chef)
//       .set(updatedRecord)
//       .where("id = :id", { id })
//       .execute();
//     return record.affected;
//   },
//   delete: async (id: number) => {
//     const record = await chefRepository
//       .createQueryBuilder()
//       .delete()
//       .from(Chef)
//       .where("id = :id", { id })
//       .execute();
//     return record.affected;
//   },
// };

export default ChefRepository;
