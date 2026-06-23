import { z } from "zod";
import { createRouter, publicQuery } from "./middleware";
import {
  createApplication,
  getApplications,
  updateApplicationStatus,
} from "./queries/applications";

export const applicationRouter = createRouter({
  create: publicQuery
    .input(
      z.object({
        fullName: z.string().min(1, "ФИО обязательно").max(255),
        countries: z.string().min(1, "Укажите страны").max(500),
        contacts: z.string().min(1, "Укажите контакты").max(500),
        organization: z.string().max(255).optional(),
      })
    )
    .mutation(async ({ input }: { input: { fullName: string; countries: string; contacts: string; organization?: string } }) => {
      const result = await createApplication(input);
      return { success: true, id: Number(result[0].insertId) };
    }),

  list: publicQuery.query(async () => {
    return getApplications();
  }),

  updateStatus: publicQuery
    .input(
      z.object({
        id: z.number(),
        status: z.enum(["pending", "reviewing", "approved", "rejected"]),
      })
    )
    .mutation(async ({ input }: { input: { id: number; status: "pending" | "reviewing" | "approved" | "rejected" } }) => {
      await updateApplicationStatus(input.id, input.status);
      return { success: true };
    }),
});
