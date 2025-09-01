import { Request, Response } from 'express';

export const deleteCreator = (req: Request, res: Response) => {
  const { id } = req.params;
  
  console.log(`Deleting creator ${id}`);
  
  res.status(200).json({
    message: 'Creator deleted successfully',
    id
  });
};