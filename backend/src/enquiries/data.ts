import type { EnquiryDto } from "../common/types.js";

export const enquiries: EnquiryDto[] = [
  {
    id: "enq-1001",
    familyName: "Bennett",
    residentName: "Margaret Bennett",
    status: "contacted",
    careNeeds: "Dementia support",
    createdAt: new Date().toISOString(),
  },
  {
    id: "enq-1002",
    familyName: "Shaw",
    residentName: "Peter Shaw",
    status: "visit_booked",
    careNeeds: "Nursing care",
    createdAt: new Date().toISOString(),
  },
];

