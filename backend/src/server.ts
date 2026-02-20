import express from "express";
import cors from "cors";
import { listEnquiries } from "./enquiries/routes.js";
import { getOccupancy } from "./occupancy/routes.js";
import { getBilling } from "./billing/routes.js";
import { summarizeTranscription } from "./ai/routes.js";
import { getIntegrations } from "./integrations/routes.js";
import { getAnalyticsOverview } from "./analytics/routes.js";

const app = express();
const port = Number(process.env.PORT ?? 4000);

app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.get("/health", (_req, res) => res.json({ status: "ok", service: "foundos-backend" }));
app.get("/api/enquiries", listEnquiries);
app.get("/api/occupancy", getOccupancy);
app.get("/api/billing", getBilling);
app.post("/api/ai/transcription-summary", summarizeTranscription);
app.get("/api/integrations", getIntegrations);
app.get("/api/analytics/overview", getAnalyticsOverview);

app.listen(port, () => {
  console.log(`foundos backend listening on ${port}`);
});
