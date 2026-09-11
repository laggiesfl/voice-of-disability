import fs from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';

const layout = fs.readFileSync(new URL('../app/layout.tsx', import.meta.url), 'utf8');
const ogImage = fs.readFileSync(new URL('../app/opengraph-image.tsx', import.meta.url), 'utf8');

test('website exposes branded share metadata', () => {
  assert.match(layout, /openGraph/);
  assert.match(layout, /https:\/\/www\.voiceofdisability\.com/);
  assert.match(layout, /Nothing About Us Without Us/);
  assert.match(layout, /twitter/);
});

test('website provides a 1200x630 branded social preview image', () => {
  assert.match(ogImage, /ImageResponse/);
  assert.match(ogImage, /width:\s*1200/);
  assert.match(ogImage, /height:\s*630/);
  assert.match(ogImage, /Voice of Disability/);
  assert.match(ogImage, /Nothing About Us Without Us/);
  assert.match(ogImage, /#7A1F5C/);
});
