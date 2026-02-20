import type { BillingDto } from "../common/types.js";

export const invoices: BillingDto[] = [
  { invoiceId: "inv-2001", providerName: "Rosewood Care", amount: 12450, currency: "GBP", status: "sent" },
  { invoiceId: "inv-2002", providerName: "Willow House", amount: 9820, currency: "GBP", status: "paid" },
];

