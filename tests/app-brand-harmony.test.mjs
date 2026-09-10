import fs from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';

const css = fs.readFileSync(new URL('../app/app-home/app-home.module.css', import.meta.url), 'utf8');

test('app home hero uses the approved Plum-led colour balance shared with the website', () => {
  assert.doesNotMatch(css, /\.hero\{[^}]*background:#17324D/);
  assert.match(css, /\.hero\{[^}]*background:#7A1F5C/);
  assert.match(css, /\.hero h1\{[^}]*color:#FFFFFF/);
  assert.match(css, /\.hero p\{[^}]*color:#FFFFFF/);
  assert.match(css, /\.eyebrow\{[^}]*color:#FFFFFF/);
});
