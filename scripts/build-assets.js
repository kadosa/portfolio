#!/usr/bin/env node

/**
 * Minimal esbuild pipeline that bundles JS and CSS assets.
 */

const esbuild = require("esbuild");
const fs = require("fs");
const path = require("path");

const watch = process.argv.includes("--watch");

const ensureDir = (target) => {
  fs.mkdirSync(target, { recursive: true });
};

const jsOutfile = path.join("dist", "js", "main.js");
const cssOutfile = path.join("dist", "css", "main.css");

ensureDir(path.dirname(jsOutfile));
ensureDir(path.dirname(cssOutfile));

const baseOptions = {
  logLevel: "info",
  minify: !watch,
  sourcemap: watch ? "inline" : false
};

const buildDescriptors = [
  {
    ...baseOptions,
    entryPoints: ["src/scripts/main.js"],
    bundle: true,
    format: "esm",
    target: ["es2017"],
    outfile: jsOutfile
  },
  {
    ...baseOptions,
    entryPoints: ["src/styles/main.css"],
    bundle: true,
    outfile: cssOutfile
  }
];

async function buildOnce() {
  await Promise.all(buildDescriptors.map((options) => esbuild.build(options)));
}

async function buildWithWatch() {
  const contexts = await Promise.all(buildDescriptors.map((options) => esbuild.context(options)));
  await Promise.all(contexts.map((ctx) => ctx.watch()));
  console.log("Watching assets with esbuild...");
}

async function run() {
  try {
    if (watch) {
      await buildWithWatch();
      // Keep process alive while watching.
      await new Promise(() => {});
    } else {
      await buildOnce();
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

run();
