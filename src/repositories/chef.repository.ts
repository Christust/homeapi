import DataSource from "../context";
import { Chef } from "../entities";
import BaseRepository from "./base.repository";

class ChefRepository extends BaseRepository<Chef> {

  constructor() {
    super(DataSource.getRepository(Chef), Chef, "chef");
  }
}

export default ChefRepository;
