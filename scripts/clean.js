#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const targets = ["_site", "dist"];

for (const target of targets) {
  const fullPath = path.join(process.cwd(), target);
  if (fs.existsSync(fullPath)) {
    fs.rmSync(fullPath, { recursive: true, force: true });
    console.log(`Removed ${target}`);
  }
}
