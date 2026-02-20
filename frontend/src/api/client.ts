const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:4000";

async function getJson(path) {
  const response = await fetch(`${API_BASE_URL}${path}`);
  if (!response.ok) throw new Error(`Request failed: ${path}`);
  return response.json();
}

export async function fetchEnquiries() {
  return getJson("/api/enquiries");
}

export async function fetchOccupancy() {
  return getJson("/api/occupancy");
}

export async function fetchBilling() {
  return getJson("/api/billing");
}

export async function fetchOverview() {
  return getJson("/api/analytics/overview");
}

export async function summarizeTranscript(transcript) {
  const response = await fetch(`${API_BASE_URL}/api/ai/transcription-summary`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ transcript }),
  });
  if (!response.ok) throw new Error("AI summary request failed");
  return response.json();
}
