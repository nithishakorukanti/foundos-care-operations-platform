import { AiPanel } from "./components/AiPanel";
import { OperationsTables } from "./components/OperationsTables";
import { OverviewPanel } from "./components/OverviewPanel";

export function App() {
  return (
    <main style={{ maxWidth: 1080, margin: "0 auto", fontFamily: "Arial, sans-serif", padding: 20 }}>
      <h1>FoundOS Care Operations Platform</h1>
      <p>Outcome-focused fullstack POC for care home enquiry, occupancy, billing, analytics, and AI productivity workflows.</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
        <OverviewPanel />
        <OperationsTables />
        <AiPanel />
      </div>
    </main>
  );
}
