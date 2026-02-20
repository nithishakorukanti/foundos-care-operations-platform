import type { Request, Response } from "express";
import { enquiries } from "./data.js";

export function listEnquiries(_req: Request, res: Response): void {
  res.json(enquiries);
}
