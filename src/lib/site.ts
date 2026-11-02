import domesticImg from "@/assets/service-domestic.jpg";
import commercialImg from "@/assets/service-commercial.jpg";
import industrialImg from "@/assets/service-industrial.jpg";
import testingImg from "@/assets/service-testing.jpg";
import cctvImg from "@/assets/service-cctv.jpg";

/**
 * Business details below are taken only from the public website safephaseelec.co.uk
 * (page footer shows © 2020). They are attributed in the UI and should be
 * re-confirmed with the business before any real use.
 */
export const business = {
  name: "Safe Phase Electrical Services Ltd",
  shortName: "Safe Phase Electrical",
  sourceUrl: "https://safephaseelec.co.uk",
  phones: [
    { display: "07588 398373", tel: "+447588398373" },
    { display: "07944 071299", tel: "+447944071299" },
  ],
  email: "safe.phase.electrical@gmail.com",
  address: ["12 Holburn Park", "Stockton-on-Tees", "Cleveland", "TS19 8BH"],
  baseAreas: "Stockton-on-Tees and Middlesbrough",
  coverage: "Works across the North East of England",
  founded: "February 2019",
} as const;

export const CONCEPT_NOTICE =
  "Unofficial design concept — not affiliated with Safe Phase Electrical";

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export const categories = [
  { id: "domestic", label: "Domestic", image: domesticImg },
  { id: "commercial", label: "Commercial", image: commercialImg },
  { id: "industrial", label: "Industrial", image: industrialImg },
  { id: "testing", label: "Testing & Inspection", image: testingImg },
  { id: "security", label: "CCTV & Security", image: cctvImg },
] as const;

export type CategoryId = (typeof categories)[number]["id"];
export const categoryIds = categories.map((c) => c.id) as CategoryId[];

export const categoryBlurbs: Record<CategoryId, string> = {
  domestic: "Sockets, lighting, repairs and rewires for homes — tidy, certified and considerate.",
  commercial: "Lighting upgrades, alterations and maintenance that keep premises running.",
  industrial: "Installations and alterations for production and plant environments.",
  testing: "Condition reports and landlord certificates that keep you compliant.",
  security: "CCTV and alarm systems for homes and commercial premises.",
};

export interface Service {
  id: string;
  title: string;
  summary: string;
  categories: CategoryId[];
}

/** Service list reflects only services named on the business's current website. */
export const services: Service[] = [
  {
    id: "sockets",
    title: "Extra sockets",
    summary:
      "Additional or repositioned sockets, inside and out — ideal when moving home or reorganising a room.",
    categories: ["domestic", "commercial"],
  },
  {
    id: "led",
    title: "LED lighting",
    summary:
      "Modern, efficient LED schemes chosen to suit the space, from downlights to feature lighting.",
    categories: ["domestic", "commercial"],
  },
  {
    id: "additional-lighting",
    title: "Additional lighting",
    summary: "Extra lighting for homes and offices, with advice on layout and fittings.",
    categories: ["domestic", "commercial"],
  },
  {
    id: "lighting-upgrades",
    title: "Lighting upgrades",
    summary:
      "Install and maintain lighting upgrades designed to reduce the running costs of your business.",
    categories: ["commercial", "industrial"],
  },
  {
    id: "repairs",
    title: "General repairs",
    summary: "Fault-finding and repairs across domestic, commercial and industrial installations.",
    categories: ["domestic", "commercial", "industrial"],
  },
  {
    id: "rewires",
    title: "Full & partial rewires",
    summary:
      "Bring an installation up to date with the current edition of the BS 7671 wiring regulations.",
    categories: ["domestic", "commercial", "industrial"],
  },
  {
    id: "alterations",
    title: "Alterations",
    summary:
      "From repositioning a socket outlet to moving a production line — no job too large or small.",
    categories: ["domestic", "commercial", "industrial"],
  },
  {
    id: "eicr",
    title: "Testing & inspection (EICR)",
    summary:
      "A full condition report on your existing installation, with periodic inspections of all sizes.",
    categories: ["testing", "domestic", "commercial", "industrial"],
  },
  {
    id: "landlord",
    title: "Landlord certificates",
    summary:
      "Fixed wire testing and inspection for landlords and lettings agents, with the certificates you need.",
    categories: ["testing", "domestic"],
  },
  {
    id: "cctv",
    title: "CCTV systems",
    summary: "Supply and installation of CCTV for commercial and domestic properties.",
    categories: ["security", "domestic", "commercial"],
  },
  {
    id: "alarms",
    title: "Security alarms",
    summary: "Alarm systems for homes, so your family and property are protected while you're away.",
    categories: ["security", "domestic"],
  },
];

export function filterServices(list: Service[], category: CategoryId | "all"): Service[] {
  if (category === "all") return list;
  return list.filter((s) => s.categories.includes(category));
}

export const faqs = [
  {
    q: "Which areas would you cover?",
    a: "The business's website says it is based in Stockton-on-Tees and Middlesbrough, works across the North East of England, and will consider projects further afield.",
  },
  {
    q: "What is an EICR?",
    a: "An Electrical Installation Condition Report is a formal inspection and test of an existing installation. It records any deterioration, defects or departures from current standards, and classifies how urgently each should be addressed.",
  },
  {
    q: "How often do rented properties need inspecting?",
    a: "In England, the Electrical Safety Standards in the Private Rented Sector Regulations 2020 require landlords to have the installation inspected and tested by a qualified person at least every five years, and to give tenants a copy of the report.",
  },
  {
    q: "Why should I ask for certification?",
    a: "Certificates show that work meets the required standards. Tenants, insurers and solicitors may ask for them — especially if you later rent or sell the property. If an electrician can't issue one, ask why.",
  },
  {
    q: "Do you take on sub-contract work?",
    a: "According to the business's website, yes — it sub-contracts for other electrical companies, including jobs they are unable to complete.",
  },
  {
    q: "Is this enquiry form real?",
    a: "No. This is an unofficial design concept. The form is a demonstration only: it checks your entries and shows a confirmation on screen, but nothing is sent or stored.",
  },
];

/** Clearly-labelled illustrative placeholders — NOT real projects. */
export const placeholderProjects = [
  { id: "p1", category: "domestic" as CategoryId, title: "Example: full home rewire", scope: "Illustrative scope — rewire, new consumer unit, certification." },
  { id: "p2", category: "commercial" as CategoryId, title: "Example: office LED upgrade", scope: "Illustrative scope — replace fluorescent fittings with LED panels." },
  { id: "p3", category: "testing" as CategoryId, title: "Example: landlord portfolio EICRs", scope: "Illustrative scope — periodic inspections across rental units." },
  { id: "p4", category: "industrial" as CategoryId, title: "Example: production line relocation", scope: "Illustrative scope — isolate, reroute supplies, re-commission." },
  { id: "p5", category: "security" as CategoryId, title: "Example: retail CCTV install", scope: "Illustrative scope — camera positioning, cabling, recorder setup." },
  { id: "p6", category: "domestic" as CategoryId, title: "Example: kitchen lighting refresh", scope: "Illustrative scope — downlights, under-cabinet LED, extra sockets." },
];
