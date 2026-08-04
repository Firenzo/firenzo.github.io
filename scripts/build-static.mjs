import { spawn } from "node:child_process";
import { exec } from "node:child_process";
import { promisify } from "node:util";

const execAsync = promisify(exec);

let strapi;

function run(command, args = []) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: "inherit",
      shell: true,
    });

    child.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`${command} exited with code ${code}`));
      }
    });

    child.on("error", reject);
  });
}

function stopStrapi() {
  return new Promise((resolve) => {
    if (!strapi) {
      resolve();
      return;
    }

    console.log("Stopping Strapi...");

    const timeout = setTimeout(() => {
      console.warn("Force killing Strapi");

      strapi.kill("SIGKILL");
      resolve();
    }, 5000);

    strapi.once("close", () => {
      clearTimeout(timeout);
      resolve();
    });

    strapi.kill("SIGINT");
  });
}

async function main() {
  console.log("Starting Strapi...");

  strapi = spawn("pnpm", ["--filter", "@repo/cms", "start"], {
    stdio: "inherit",
    shell: true,
  });

  await run("pnpm", ["wait-for-strapi"]);

  console.log("Building Astro...");
  await run("pnpm", ["build-astro"]);

  console.log("Copying assets...");
  await run("pnpm", ["copy-assets"]);

  console.log("Build finished.");
}

main()
  .then(async () => {
    await stopStrapi();
  })
  .catch(async (error) => {
    console.error(error);
    await stopStrapi();
    process.exit(1);
  });
