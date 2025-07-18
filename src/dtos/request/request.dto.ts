class RequestDTO {
  page: number = 1;
  limit: number = 10;
  search: string | null | undefined = null;

  constructor(params: Record<string, unknown>) {
    params.page && (this.page = Number(params.page));
    params.limit && (this.limit = Number(params.limit));
    params.search && (this.search = params.search as string);
  }
}

export default RequestDTO;