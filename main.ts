import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A broadcast forecast for an invented town, bent by one local detail.
const forecast =
  "Puddlewick: drizzle until nine, then sunny spells; trains are running on time, so locals are advised to stay indoors and suspicious.";

const limit = 140;
if ([...forecast].length > limit) throw new Error(`forecast is ${[...forecast].length} characters, limit ${limit}`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), forecast);
