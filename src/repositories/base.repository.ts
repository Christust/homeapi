import { InsertResult, ObjectLiteral, Repository, SelectQueryBuilder } from "typeorm";

interface IBaseRepository<T extends ObjectLiteral> {
    findAll(): Promise<SelectQueryBuilder<T>>;
    findOne(id: number): Promise<T | null>;
    create(newRecord: Partial<T>): Promise<InsertResult>;
    update(id: number, updatedRecord: Partial<T>): Promise<number | undefined>;
    delete(id: number): Promise<number | null | undefined>;
}
class BaseRepository<T extends ObjectLiteral> implements IBaseRepository<T> {
  protected _context: Repository<T>;
  private _recordClass: new () => T;
  private _model: string;

  constructor(context: Repository<T>, recordClass: new () => T, model: string) {
    this._context = context;
    this._recordClass = recordClass;
    this._model = model;
  }

  public async findAll() {
    const records = await this._context.createQueryBuilder(this._model);
    return records;
  }
  public async findOne(id: number) {
    const record = await this._context
      .createQueryBuilder(this._model)
      .where(`${this._model}.id = :id`, { id })
      .getOne();
    return record;
  }
  public async create(newRecord: Partial<T>) {
    const record = await this._context
      .createQueryBuilder()
      .insert()
      .into(this._recordClass)
      .values(newRecord)
      .execute();
    return record;
  }
  public async update(id: number, updatedRecord: Partial<T>) {
    const record = await this._context
      .createQueryBuilder()
      .update(this._recordClass)
      .set(updatedRecord)
      .where("id = :id", { id })
      .execute();
    return record.affected;
  }
  public async delete(id: number) {
    const record = await this._context
      .createQueryBuilder()
      .delete()
      .from(this._recordClass)
      .where("id = :id", { id })
      .execute();
    return record.affected;
  }
}

export default BaseRepository;
