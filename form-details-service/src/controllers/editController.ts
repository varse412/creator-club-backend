import { Request, Response } from "express";
import { RegisterSchema } from "../dto/registerDto";

export const editCreator = (req: Request, res: Response) => {
  const { id } = req.params;
  const validation = RegisterSchema.safeParse(req.body);

  if (!validation.success) {
    return res.status(400).json({ error: validation.error.errors });
  }

  const editData = { ...validation.data, id };
  console.log(`Editing creator ${id}:`, editData);

  res.status(200).json({
    message: "Creator updated successfully",
    data: editData,
  });
};
