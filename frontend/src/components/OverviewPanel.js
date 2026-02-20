import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { fetchOverview } from "../api/client";
import { useAsync } from "../hooks/useAsync";
export function OverviewPanel() {
    const { data, loading, error } = useAsync(() => fetchOverview(), []);
    if (loading)
        return _jsx("p", { children: "Loading analytics..." });
    if (error || !data)
        return _jsx("p", { children: "Unable to load analytics." });
    return (_jsxs("section", { style: { border: "1px solid #ddd", borderRadius: 8, padding: 16 }, children: [_jsx("h2", { children: "Operations Overview" }), _jsxs("ul", { children: [_jsxs("li", { children: ["Total enquiries: ", data.totalEnquiries] }), _jsxs("li", { children: ["Conversion rate: ", (data.conversionRate * 100).toFixed(1), "%"] }), _jsxs("li", { children: ["Occupancy rate: ", (data.occupancyRate * 100).toFixed(1), "%"] }), _jsxs("li", { children: ["Avg invoice cycle (days): ", data.averageInvoiceCycleDays] }), _jsxs("li", { children: ["AI-assisted notes generated: ", data.aiAssistedNotesGenerated] })] })] }));
}
