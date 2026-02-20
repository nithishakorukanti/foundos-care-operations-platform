import type { Request, Response } from "express";

export function getAnalyticsOverview(_req: Request, res: Response): void {
  res.json({
    totalEnquiries: 342,
    conversionRate: 0.27,
    occupancyRate: 0.86,
    averageInvoiceCycleDays: 5.4,
    aiAssistedNotesGenerated: 1180,
  });
}
