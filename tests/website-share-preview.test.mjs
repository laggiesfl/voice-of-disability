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

test('website share card makes the Concept A mark dominant', () => {
  assert.match(ogImage, /ImageResponse/);
  assert.match(ogImage, /width:\s*1200/);
  assert.match(ogImage, /height:\s*630/);
  assert.match(ogImage, /VOICE OF DISABILITY/);
  assert.match(ogImage, /width:\s*'4[4-9][0-9]px'/);
  assert.match(ogImage, /height:\s*'4[4-9][0-9]px'/);
  assert.doesNotMatch(ogImage, /Your voice\. Your rights\. Your community\./);
  assert.doesNotMatch(ogImage, />\s*Nothing About Us Without Us\s*</);
});
