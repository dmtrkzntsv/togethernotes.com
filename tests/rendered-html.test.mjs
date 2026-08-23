import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function builtPage(path = "") {
  return readFile(new URL(`../dist/${path}/index.html`, import.meta.url), "utf8");
}

test("builds the Together Notes landing page", async () => {
  const html = await builtPage();
  assert.match(html, /Together Notes — Markdown notes in a git repo your agents can use/);
  assert.match(html, /The notes app your agents already know how to use/);
  assert.match(html, /\$19\.99\.<br>Once\./);
  assert.match(html, /Download on the App Store/);
  assert.match(html, /astro-island/);
});

for (const path of ["privacy", "support"]) {
  test(`builds /${path}`, async () => {
    const html = await builtPage(path);
    assert.match(html, /Together Notes/);
  });
}
