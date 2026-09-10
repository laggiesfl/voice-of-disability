import fs from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';

const home = fs.readFileSync(new URL('../app/page.tsx', import.meta.url), 'utf8');
const brandCss = fs.readFileSync(new URL('../app/brand-overrides.css', import.meta.url), 'utf8');

test('homepage hero visually replaces the legacy speech-bubble waveform with Concept A', () => {
  assert.match(home, /className="hero-card"/);
  assert.match(brandCss, /\.hero-card\s*>\s*svg\s*\{[^}]*display:\s*none/);
  assert.match(brandCss, /\.hero-card::before\s*\{[^}]*background:\s*url\('\/brand\/vod-concept-a-mark\.svg'\)/);
});
