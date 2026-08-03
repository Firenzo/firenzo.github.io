import { cp } from "node:fs/promises";
import { resolve } from "node:path";

const source = resolve("apps/cms/public");
const destination = resolve("apps/astro/dist");

await cp(source, destination, {
  recursive: true,
  force: true,
});

console.log("Copied Strapi public folder.");
