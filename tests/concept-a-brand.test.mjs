import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const read = (path) => fs.readFileSync(path, 'utf8');

test('Concept A brand assets exist and are wired into website and app', () => {
  const expectedAssets = [
    'public/brand/vod-concept-a-mark.svg',
    'public/brand/vod-concept-a-logo-horizontal.svg',
    'public/brand/vod-concept-a-logo-monochrome.svg',
    'public/brand/vod-concept-a-logo-reversed.svg',
    'public/brand/brand-manifest.json',
  ];

  for (const asset of expectedAssets) {
    assert.ok(fs.existsSync(asset), `${asset} should exist`);
  }

  const nav = read('app/components/Nav.tsx');
  const footer = read('app/components/Footer.tsx');
  const appLayout = read('app/app-home/layout.tsx');
  const manifest = read('app/manifest.ts');

  assert.match(nav, /\/brand\/vod-concept-a-logo-horizontal\.svg/);
  assert.match(footer, /\/brand\/vod-concept-a-logo-reversed\.svg/);
  assert.match(appLayout, /\/brand\/vod-concept-a-logo-horizontal\.svg/);
  assert.match(manifest, /\/brand\/vod-concept-a-mark\.svg/);
  assert.match(manifest, /#17324D/);
});

test('Concept A SVGs use the approved Voice of Disability palette only', () => {
  const files = [
    'public/brand/vod-concept-a-mark.svg',
    'public/brand/vod-concept-a-logo-horizontal.svg',
    'public/brand/vod-concept-a-logo-monochrome.svg',
    'public/brand/vod-concept-a-logo-reversed.svg',
  ];
  const approved = new Set(['#17324D', '#7A1F5C', '#C04A7A', '#D9A441', '#F7F4EF', '#E8EEF3', '#222222', '#FFFFFF']);

  for (const file of files) {
    const svg = read(file);
    const colours = [...svg.matchAll(/#[0-9A-Fa-f]{6}/g)].map((m) => m[0].toUpperCase());
    for (const colour of colours) {
      assert.ok(approved.has(colour), `${file} contains unapproved colour ${colour}`);
    }
  }
});
