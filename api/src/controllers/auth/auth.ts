import { Request, Response } from "express";
import { registrationService } from "../../server/index";

export const register = async (req: Request, res: Response) => {
  await registrationService.signUp({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  res.sendStatus(201);
};
