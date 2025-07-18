class ResponseDTO<T> {
  records: T[] = [];
  total: number = 0;
  limit: number = 10;

  constructor(records: T[], total: number, limit: number) {
    records && (this.records = records);
    total && (this.total = total);
    limit && (this.limit = limit);
  }
}

export default ResponseDTO;
