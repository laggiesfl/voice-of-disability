import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const appCss = fs.readFileSync('app/app-home/app-home.module.css', 'utf8');
const brandCss = fs.readFileSync('app/brand-overrides.css', 'utf8');

test('app hero uses the same Plum-led visual language as the website', () => {
  assert.match(appCss, /\.hero\{[^}]*background:#7A1F5C/);
  assert.match(appCss, /\.hero h1\{[^}]*color:#FFFFFF/);
  assert.match(appCss, /\.hero p\{[^}]*color:#FFFFFF/);
  assert.match(appCss, /\.eyebrow\{[^}]*color:#FFFFFF/);
});

test('website and app headers give the Concept A lock-up stronger prominence', () => {
  assert.match(brandCss, /\.nav-brand img\s*\{[^}]*width:\s*clamp\(240px,\s*24vw,\s*360px\)/s);
  assert.match(appCss, /\.appBrand img\{[^}]*width:min\(360px,46vw\)/);
});

test('high contrast mode still overrides the branded app hero safely', () => {
  assert.match(appCss, /data-vod-high-contrast='true'\]\) \.hero\{background:#000000\}/);
  assert.match(appCss, /data-vod-high-contrast='true'\]\) \.hero h1[^}]*color:#FFFFFF/);
});
