import fs from "fs";
import path from "path";

// Helpers
function moveAllFiles(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return;

  const entries = fs.readdirSync(srcDir, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isFile()) {
      fs.renameSync(srcPath, destPath);
    } else if (entry.isDirectory()) {
      // Recursively move subdirectory contents
      fs.mkdirSync(destPath, { recursive: true });
      moveAllFiles(srcPath, destPath);
      fs.rmdirSync(srcPath);
    }
  }
}

console.log("Cleaning up dist...");

// Move files from dist/dist → dist/
const outerDist = path.resolve("dist");
const innerDist = path.join(outerDist, "dist");

console.log(
  "Moving files to their desired destination and deleting empty directories"
);
if (fs.existsSync(innerDist)) {
  moveAllFiles(innerDist, outerDist);
  fs.rmdirSync(innerDist);
} else {
  console.log("No nested dist folder found. Nothing to move.");
}

// Move files from dist/src/components → dist/components
const componentsSource = path.join(outerDist, "src", "components");
const componentsTarget = path.join(outerDist, "components");

if (fs.existsSync(componentsSource)) {
  moveAllFiles(componentsSource, componentsTarget);

  // Clean up empty folders
  fs.rmdirSync(componentsSource);
  const srcDir = path.join(outerDist, "src");
  try {
    fs.rmdirSync(srcDir);
  } catch {
    // do nothing if not empty
  }
} else {
  console.log("No src/components folder found. Nothing to move.");
}

console.log("Cleanup done!");
