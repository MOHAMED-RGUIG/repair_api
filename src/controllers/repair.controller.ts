import { Request, Response } from "express";
import { RepairModel } from "../models/repair.model";

export const RepairController = {
  async create(req: Request, res: Response) {
    try {
      const result = await RepairModel.create(req.body);
      res.json({ message: "Repair saved successfully", result });
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  async getAll(req: Request, res: Response) {
    try {
      const repairs = await RepairModel.getAll();
      repairs.forEach((r: any) => {
        r.partsChanged = JSON.parse(r.partsChanged);
        r.partsNeeded = JSON.parse(r.partsNeeded);
      });
      res.json(repairs);
    } catch (error) {
      res.status(500).json({ error });
    }
  },
};
