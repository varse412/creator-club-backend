import { Request, Response } from "express";
import { RegisterSchema } from "../dto/registerDto";
import { v4 as uuidv4 } from 'uuid';

export const registerCreator = (req: Request, res: Response) => {
  const validation = RegisterSchema.safeParse(req.body);

  if (!validation.success) {
    return res.status(400).json({ error: validation.error.errors });
  }

  const registerData = { ...validation.data, id: uuidv4() };
  console.log("Creator registration:", registerData);

  res.status(201).json({
    message: "Creator registered successfully",
    data: registerData,
  });
};
