import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { fetchBilling, fetchEnquiries, fetchOccupancy } from "../api/client";
import { useAsync } from "../hooks/useAsync";
export function OperationsTables() {
    const enquiries = useAsync(fetchEnquiries, []);
    const occupancy = useAsync(fetchOccupancy, []);
    const billing = useAsync(fetchBilling, []);
    return (_jsxs("section", { style: { border: "1px solid #ddd", borderRadius: 8, padding: 16 }, children: [_jsx("h2", { children: "Core FoundOS Modules" }), _jsx("h3", { children: "Enquiries" }), enquiries.loading ? _jsx("p", { children: "Loading enquiries..." }) : null, _jsx("ul", { children: (enquiries.data ?? []).map((item) => _jsxs("li", { children: [item.residentName, " - ", item.status, " - ", item.careNeeds] }, item.id)) }), _jsx("h3", { children: "Occupancy" }), occupancy.loading ? _jsx("p", { children: "Loading occupancy..." }) : null, _jsx("ul", { children: (occupancy.data ?? []).map((item) => _jsxs("li", { children: [item.homeId, ": ", item.occupiedBeds, "/", item.totalBeds, " beds (", item.predictedOccupancyPercent, "% predicted)"] }, item.homeId)) }), _jsx("h3", { children: "Billing" }), billing.loading ? _jsx("p", { children: "Loading billing..." }) : null, _jsx("ul", { children: (billing.data ?? []).map((item) => _jsxs("li", { children: [item.providerName, " - GBP ", item.amount, " - ", item.status] }, item.invoiceId)) })] }));
}
