import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AiPanel } from "./components/AiPanel";
import { OperationsTables } from "./components/OperationsTables";
import { OverviewPanel } from "./components/OverviewPanel";
export function App() {
    return (_jsxs("main", { style: { maxWidth: 1080, margin: "0 auto", fontFamily: "Arial, sans-serif", padding: 20 }, children: [_jsx("h1", { children: "FoundOS Care Operations Platform" }), _jsx("p", { children: "Outcome-focused fullstack POC for care home enquiry, occupancy, billing, analytics, and AI productivity workflows." }), _jsxs("div", { style: { display: "grid", gridTemplateColumns: "1fr", gap: 16 }, children: [_jsx(OverviewPanel, {}), _jsx(OperationsTables, {}), _jsx(AiPanel, {})] })] }));
}
