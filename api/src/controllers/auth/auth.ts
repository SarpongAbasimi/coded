import { Request, Response } from "express";

export const register = (req: Request, res: Response) => {
  res.send(req.body);
};
