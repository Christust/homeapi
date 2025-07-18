import { NextFunction, Request, Response } from "express";

type AsyncHandler = (req: Request, res: Response, next: NextFunction) => Promise<void>;

function asyncHandler(fn: AsyncHandler) {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((error) => {
      console.error(error);
      res.status(500).json({
        message: "Error interno del servidor",
        error: error.message,
      });
    });
  };
}

export default asyncHandler;
