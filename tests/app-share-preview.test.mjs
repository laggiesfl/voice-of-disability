import fs from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';

const layout = fs.readFileSync(new URL('../app/app-home/layout.tsx', import.meta.url), 'utf8');
const ogImage = fs.readFileSync(new URL('../app/app-home/opengraph-image.tsx', import.meta.url), 'utf8');

test('app-home exposes branded share metadata for messaging previews', () => {
  assert.match(layout, /export const metadata/);
  assert.match(layout, /Voice of Disability App/);
  assert.match(layout, /https:\/\/www\.voiceofdisability\.com\/app-home/);
  assert.match(layout, /openGraph/);
  assert.match(layout, /twitter/);
});

test('app-home provides a 1200x630 branded social preview image', () => {
  assert.match(ogImage, /ImageResponse/);
  assert.match(ogImage, /width:\s*1200/);
  assert.match(ogImage, /height:\s*630/);
  assert.match(ogImage, /#7A1F5C/);
  assert.match(ogImage, /Voice of Disability/);
  assert.match(ogImage, /What do you need today\?/);
});
