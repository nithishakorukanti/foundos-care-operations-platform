import type { Request, Response } from "express";
import type { TranscriptionSummaryRequest, TranscriptionSummaryResponse } from "../common/types.js";

function deriveSentiment(text: string): TranscriptionSummaryResponse["sentiment"] {
  const lower = text.toLowerCase();
  if (lower.includes("urgent") || lower.includes("risk") || lower.includes("fall")) return "concern";
  if (lower.includes("happy") || lower.includes("improved")) return "positive";
  return "neutral";
}

export function summarizeTranscription(req: Request, res: Response): void {
  const body = req.body as TranscriptionSummaryRequest;
  const transcript = (body?.transcript ?? "").trim();

  if (!transcript) {
    res.status(400).json({ error: "transcript is required" });
    return;
  }

  const summary = transcript.length > 180 ? `${transcript.slice(0, 180)}...` : transcript;

  const response: TranscriptionSummaryResponse = {
    summary,
    actionItems: [
      "Follow up with family within 24 hours",
      "Update enquiry notes in FoundOS",
      "Flag safeguarding concerns to care lead",
    ],
    sentiment: deriveSentiment(transcript),
  };

  res.json(response);
}

