import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";
import { routeTree } from "@/routeTree.gen";
import { enquirySchema } from "@/lib/enquiry";
import { business, filterServices, services } from "@/lib/site";

const valid = {
  name: "Jo Bloggs",
  email: "jo@example.com",
  phone: "",
  postcode: "",
  service: "domestic",
  message: "Need two extra sockets in the kitchen please.",
  consent: true,
};

describe("navigation", () => {
  it.each(["/", "/services", "/about", "/projects", "/contact"])("%s resolves to a page", (path) => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    expect(router.matchRoutes(path).at(-1)?.routeId).not.toBe(rootRouteId);
  });
});

describe("service filtering", () => {
  it("CCTV & Security shows only security services", () => {
    const ids = filterServices(services, "security").map((s) => s.id);
    expect(ids).toEqual(["cctv", "alarms"]);
  });
  it("'all' shows every service", () => {
    expect(filterServices(services, "all")).toHaveLength(services.length);
  });
});

describe("demo enquiry validation", () => {
  it("accepts a complete enquiry", () => {
    expect(enquirySchema.safeParse(valid).success).toBe(true);
  });
  it("rejects an invalid email", () => {
    expect(enquirySchema.safeParse({ ...valid, email: "nope" }).success).toBe(false);
  });
  it("rejects without demo acknowledgement", () => {
    expect(enquirySchema.safeParse({ ...valid, consent: false }).success).toBe(false);
  });
  it("rejects a too-short message", () => {
    expect(enquirySchema.safeParse({ ...valid, message: "hi" }).success).toBe(false);
  });
});

describe("click-to-call uses only numbers from the source site", () => {
  it("matches the two listed numbers", () => {
    expect(business.phones.map((p) => p.tel)).toEqual(["+447588398373", "+447944071299"]);
  });
});
