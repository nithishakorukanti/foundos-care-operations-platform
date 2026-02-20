import { fetchBilling, fetchEnquiries, fetchOccupancy } from "../api/client";
import { useAsync } from "../hooks/useAsync";

export function OperationsTables() {
  const enquiries = useAsync(fetchEnquiries, []);
  const occupancy = useAsync(fetchOccupancy, []);
  const billing = useAsync(fetchBilling, []);

  return (
    <section style={{ border: "1px solid #ddd", borderRadius: 8, padding: 16 }}>
      <h2>Core FoundOS Modules</h2>
      <h3>Enquiries</h3>
      {enquiries.loading ? <p>Loading enquiries...</p> : null}
      <ul>{(enquiries.data ?? []).map((item) => <li key={item.id}>{item.residentName} - {item.status} - {item.careNeeds}</li>)}</ul>

      <h3>Occupancy</h3>
      {occupancy.loading ? <p>Loading occupancy...</p> : null}
      <ul>{(occupancy.data ?? []).map((item) => <li key={item.homeId}>{item.homeId}: {item.occupiedBeds}/{item.totalBeds} beds ({item.predictedOccupancyPercent}% predicted)</li>)}</ul>

      <h3>Billing</h3>
      {billing.loading ? <p>Loading billing...</p> : null}
      <ul>{(billing.data ?? []).map((item) => <li key={item.invoiceId}>{item.providerName} - GBP {item.amount} - {item.status}</li>)}</ul>
    </section>
  );
}
