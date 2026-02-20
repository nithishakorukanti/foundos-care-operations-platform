import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
        }
        finally {
            setLoading(false);
        }
    }
    return (_jsxs("section", { style: { border: "1px solid #ddd", borderRadius: 8, padding: 16 }, children: [_jsx("h2", { children: "AI Care Notes Assistant" }), _jsx("textarea", { value: transcript, onChange: (e) => setTranscript(e.target.value), rows: 5, style: { width: "100%", marginBottom: 10 } }), _jsx("button", { onClick: onSummarize, disabled: loading, children: loading ? "Summarizing..." : "Generate Summary" }), summary ? _jsxs("p", { children: [_jsx("strong", { children: "Summary:" }), " ", summary] }) : null, sentiment ? _jsxs("p", { children: [_jsx("strong", { children: "Sentiment:" }), " ", sentiment] }) : null, items.length > 0 ? _jsx("ul", { children: items.map((item) => _jsx("li", { children: item }, item)) }) : null] }));
}
