import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["dev", "test", "production"]).default("dev"),
  PORT: z.coerce.number().default(3333),
});

const { success, error, data: env } = envSchema.safeParse(process.env);

if (!success) {
  const message = "❌ Invalid environment variables";
  console.error(message, error.format());
  throw new Error(message);
}

export default env;
