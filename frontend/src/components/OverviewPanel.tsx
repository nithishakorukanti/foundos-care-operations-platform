import { fetchOverview } from "../api/client";
import { useAsync } from "../hooks/useAsync";

export function OverviewPanel() {
  const { data, loading, error } = useAsync(() => fetchOverview(), []);
  if (loading) return <p>Loading analytics...</p>;
  if (error || !data) return <p>Unable to load analytics.</p>;

  return (
    <section style={{ border: "1px solid #ddd", borderRadius: 8, padding: 16 }}>
      <h2>Operations Overview</h2>
      <ul>
        <li>Total enquiries: {data.totalEnquiries}</li>
        <li>Conversion rate: {(data.conversionRate * 100).toFixed(1)}%</li>
        <li>Occupancy rate: {(data.occupancyRate * 100).toFixed(1)}%</li>
        <li>Avg invoice cycle (days): {data.averageInvoiceCycleDays}</li>
        <li>AI-assisted notes generated: {data.aiAssistedNotesGenerated}</li>
      </ul>
    </section>
  );
}
