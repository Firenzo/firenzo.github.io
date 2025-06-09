import chokidar from "chokidar";
import { spawn } from "child_process";

let timeout;
const DEBOUNCE_MS = 100;
const WATCHING_TEXT = "Watching for changes in icons folder...";

const runBuildScript = () => {
  console.log("\n🔄 Detected change, rebuilding...");

  const child = spawn("node", ["scripts/buildAll.js"], {
    stdio: "inherit", // 👈 pipe stdout/stderr to parent terminal
    shell: true, // 👈 important for cross-platform compatibility
  });

  child.on("exit", (code) => {
    code === 0 && console.log(WATCHING_TEXT);
  });
};

const debouncedBuild = () => {
  clearTimeout(timeout);
  timeout = setTimeout(runBuildScript, DEBOUNCE_MS);
};

console.log(WATCHING_TEXT);
chokidar
  .watch("src/icons", { ignoreInitial: true })
  .on("add", debouncedBuild)
  .on("change", debouncedBuild)
  .on("unlink", debouncedBuild);
