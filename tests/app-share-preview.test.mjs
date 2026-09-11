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

test('app share card is logo-led and simplified for recognition', () => {
  assert.match(ogImage, /ImageResponse/);
  assert.match(ogImage, /width:\s*1200/);
  assert.match(ogImage, /height:\s*630/);
  assert.match(ogImage, /VOICE OF DISABILITY/);
  assert.match(ogImage, /Voice of Disability App/);
  assert.match(ogImage, /What do you need today\?/);
  assert.match(ogImage, /width:\s*'3[0-9]{2}px'/);
  assert.doesNotMatch(ogImage, /Your voice\. Your rights\. Your community\./);
});
