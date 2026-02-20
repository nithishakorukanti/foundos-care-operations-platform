import type { Request, Response } from "express";

export function getIntegrations(_req: Request, res: Response): void {
  res.json([
    { name: "QuickBooksAdapter", status: "ready", direction: "outbound-billing" },
    { name: "SageAdapter", status: "ready", direction: "outbound-billing" },
    { name: "CarePlanningAdapter", status: "planned", direction: "bi-directional" },
  ]);
}
