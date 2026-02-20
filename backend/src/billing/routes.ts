import type { Request, Response } from "express";
import { invoices } from "./data.js";

export function getBilling(_req: Request, res: Response): void {
  res.json(invoices);
}
