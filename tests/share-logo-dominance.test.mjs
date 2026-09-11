import fs from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';

const website = fs.readFileSync(new URL('../app/opengraph-image.tsx', import.meta.url), 'utf8');
const app = fs.readFileSync(new URL('../app/app-home/opengraph-image.tsx', import.meta.url), 'utf8');

for (const [label, source] of [['website', website], ['app', app]]) {
  test(`${label} share card prioritises the Concept A mark over copy`, () => {
    assert.match(source, /width:\s*'4[4-9][0-9]px'/);
    assert.match(source, /height:\s*'4[4-9][0-9]px'/);
    assert.match(source, /VOICE OF DISABILITY/);
    assert.doesNotMatch(source, /Your voice\. Your rights\. Your community\./);
  });
}

test('app share card lets platform metadata distinguish the app instead of crowding the image', () => {
  assert.doesNotMatch(app, />\s*Voice of Disability App\s*</);
  assert.doesNotMatch(app, />\s*What do you need today\?\s*</);
});
