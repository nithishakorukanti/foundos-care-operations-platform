export type EnquiryStatus = "new" | "contacted" | "visit_booked" | "converted";

export interface EnquiryDto {
  id: string;
  familyName: string;
  residentName: string;
  status: EnquiryStatus;
  careNeeds: string;
  createdAt: string;
}

export interface OccupancyDto {
  homeId: string;
  totalBeds: number;
  occupiedBeds: number;
  predictedOccupancyPercent: number;
}

export interface BillingDto {
  invoiceId: string;
  providerName: string;
  amount: number;
  currency: "GBP";
  status: "draft" | "sent" | "paid";
}

export interface TranscriptionSummaryRequest {
  transcript: string;
}

export interface TranscriptionSummaryResponse {
  summary: string;
  actionItems: string[];
  sentiment: "positive" | "neutral" | "concern";
}
