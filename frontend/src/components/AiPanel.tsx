import { useState } from "react";
import { summarizeTranscript } from "../api/client";

export function AiPanel() {
  const [transcript, setTranscript] = useState("Family call notes: resident had a minor fall risk concern and requested urgent mobility assessment.");
  const [summary, setSummary] = useState("");
  const [sentiment, setSentiment] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  async function onSummarize() {
    setLoading(true);
    try {
      const result = await summarizeTranscript(transcript);
      setSummary(result.summary);
      setSentiment(result.sentiment);
      setItems(result.actionItems);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section style={{ border: "1px solid #ddd", borderRadius: 8, padding: 16 }}>
      <h2>AI Care Notes Assistant</h2>
      <textarea value={transcript} onChange={(e) => setTranscript(e.target.value)} rows={5} style={{ width: "100%", marginBottom: 10 }} />
      <button onClick={onSummarize} disabled={loading}>{loading ? "Summarizing..." : "Generate Summary"}</button>
      {summary ? <p><strong>Summary:</strong> {summary}</p> : null}
      {sentiment ? <p><strong>Sentiment:</strong> {sentiment}</p> : null}
      {items.length > 0 ? <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul> : null}
    </section>
  );
}
