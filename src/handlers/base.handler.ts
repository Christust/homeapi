import { RequestDTO } from "../dtos/request";

class BaseHandler {
  
  protected getLimitOffset(params: RequestDTO): { limit: number; offset: number } {
    const limit = params.limit || 10; // Default limit to 10 if not provided
    const page = params.page || 1; // Default page to 1 if not provided
    const offset = (page - 1) * limit; // Calculate offset based on page and limit
    return { limit, offset };
  }
}

export default BaseHandler;
