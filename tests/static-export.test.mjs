import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

test("GitHub Pages export retains approved V8 sections and local cover paths", () => {
  const html = fs.readFileSync(
    new URL("../out/index.html", import.meta.url),
    "utf8",
  );
  for (const id of ["about", "ai", "thinking", "spatial", "why-me", "contact"])
    assert.ok(html.includes(`id="${id}"`), id);
  for (const title of [
    "Self-Driven &amp; Resourceful",
    "Analytical &amp; Evidence-Driven",
    "Structured Thinking &amp; Execution",
  ])
    assert.ok(html.includes(title), title);
  for (const file of [
    "terrabench/cover-terrabench.webp",
    "lumina/cover-lumina-spatial.webp",
    "moonlight/cover-moonlight.webp",
    "plant-control/cover-plant-control.webp",
    "portfolio/cover-green-spatial.webp",
    "portfolio/cover-blue-spatial.webp",
  ]) {
    assert.ok(html.includes(`/Portfolio/${file}`), file);
    assert.ok(fs.existsSync(new URL(`../out/${file}`, import.meta.url)), file);
  }
  assert.ok(!html.includes("Preview Only"));
  assert.ok(!html.includes("Draft · Not Published"));
});

test("all case archive assets and the standalone Conclusion ship in the export", () => {
  const runtime = fs.readFileSync(
    new URL("../app/portfolio-runtime.js", import.meta.url),
    "utf8",
  );
  const assets = new Set(
    [
      ...runtime.matchAll(
        /['"]((?:terrabench|lumina|moonlight|plant-control|portfolio)\/[\w.-]+\.(?:webp|png))['"]/g,
      ),
    ].map((match) => match[1]),
  );
  assert.equal(assets.size, 62);
  for (const file of assets)
    assert.ok(fs.existsSync(new URL(`../out/${file}`, import.meta.url)), file);
  const image = fs.readFileSync(
    new URL("../out/lumina/cafe-nomade-conclusion.png", import.meta.url),
  );
  assert.equal(image.subarray(1, 4).toString(), "PNG");
  assert.equal(image.readUInt32BE(16), 2048);
  assert.equal(image.readUInt32BE(20), 1077);
  assert.ok(!runtime.includes("data:image"));
});
