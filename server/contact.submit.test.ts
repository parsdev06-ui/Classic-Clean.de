import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock notifyOwner so tests don't hit the real notification service
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("contact.submit", () => {
  it("returns success when all required fields are provided", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "Max Mustermann",
      company: "Musterfirma GmbH",
      phone: "0163 6259023",
      email: "max@musterfirma.de",
      message: "Wir benötigen eine Büroreinigung.",
    });

    expect(result.success).toBe(true);
  });

  it("returns success without a message (optional field)", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "Erika Muster",
      company: "Erika GmbH",
      phone: "030 12345678",
      email: "erika@muster.de",
      message: "",
    });

    expect(result.success).toBe(true);
  });

  it("throws validation error when email is invalid", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "Test",
        company: "Test GmbH",
        phone: "0123456789",
        email: "keine-gueltige-email",
        message: "",
      })
    ).rejects.toThrow();
  });

  it("throws validation error when required fields are missing", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "",
        company: "Test GmbH",
        phone: "0123456789",
        email: "test@test.de",
        message: "",
      })
    ).rejects.toThrow();
  });
});
