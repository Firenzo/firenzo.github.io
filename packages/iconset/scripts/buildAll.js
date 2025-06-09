import { exec } from "child_process";

const run = (cmd) =>
  new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        stderr && console.error(stderr);
        reject(error);
      } else {
        stdout && console.log(stdout);
        resolve();
      }
    });
  });

async function buildAll() {
  try {
    await run("node ./scripts/build.js");
    await run("tsc");
    await run("node ./scripts/post-build.js");
    console.log("✅ Build successful");
  } catch (err) {
    process.exit(1);
  }
}

buildAll();
