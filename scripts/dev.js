#!/usr/bin/env node

const { spawn } = require("child_process");
const path = require("path");

const isWindows = process.platform === "win32";
const bunExecutable = isWindows ? "bun.exe" : "bun";
const bunxExecutable = isWindows ? "bunx.cmd" : "bunx";

const processes = [
  {
    label: "assets",
    command: bunExecutable,
    args: [path.join("scripts", "build-assets.js"), "--watch"]
  },
  {
    label: "eleventy",
    command: bunxExecutable,
    args: ["eleventy", "--serve"]
  }
];

const children = [];

const spawnProcess = ({ label, command, args }) => {
  const child = spawn(command, args, { stdio: "inherit" });
  children.push(child);
  child.on("exit", (code) => {
    if (code !== 0) {
      console.error(`${label} exited with code ${code}`);
      cleanup();
      process.exit(code ?? 1);
    }
  });
};

const cleanup = () => {
  for (const child of children) {
    if (!child.killed) {
      child.kill();
    }
  }
};

process.on("SIGINT", () => {
  cleanup();
  process.exit(0);
});

process.on("SIGTERM", () => {
  cleanup();
  process.exit(0);
});

processes.forEach(spawnProcess);
