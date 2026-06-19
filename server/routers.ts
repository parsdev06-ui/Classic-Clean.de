import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { notifyOwner } from "./_core/notification";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  /**
   * Contact form submission
   * Sends a notification to the owner with all form data.
   * Public procedure – no login required.
   */
  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name ist erforderlich").max(120),
          company: z.string().min(1, "Unternehmen ist erforderlich").max(200),
          phone: z.string().min(1, "Telefon ist erforderlich").max(50),
          email: z.string().email("Ungültige E-Mail-Adresse").max(320),
          message: z.string().max(2000).optional().default(""),
        })
      )
      .mutation(async ({ input }) => {
        const { name, company, phone, email, message } = input;

        const title = `Neue Anfrage von ${name} (${company})`;

        const content = [
          `**Neue Kontaktanfrage über die Classic-Clean Website**`,
          ``,
          `**Name:** ${name}`,
          `**Unternehmen:** ${company}`,
          `**Telefon:** ${phone}`,
          `**E-Mail:** ${email}`,
          message ? `**Nachricht:**\n${message}` : `**Nachricht:** (keine Nachricht angegeben)`,
          ``,
          `---`,
          `Bitte melden Sie sich schnellstmöglich beim Kunden zurück.`,
        ].join("\n");

        const notified = await notifyOwner({ title, content });

        return {
          success: true,
          notified,
        };
      }),
  }),
});

export type AppRouter = typeof appRouter;
