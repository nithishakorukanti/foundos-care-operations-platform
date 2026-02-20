import type { Request, Response } from "express";
import { occupancySnapshot } from "./data.js";

export function getOccupancy(_req: Request, res: Response): void {
  res.json(occupancySnapshot);
}
