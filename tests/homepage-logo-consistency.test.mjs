import fs from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';

const home = fs.readFileSync(new URL('../app/page.tsx', import.meta.url), 'utf8');

test('homepage hero uses Concept A mark and does not render the legacy speech-bubble waveform logo', () => {
  assert.match(home, /src="\/brand\/vod-concept-a-mark\.svg"/);
  assert.doesNotMatch(home, /linearGradient id="hcGrad"/);
  assert.doesNotMatch(home, /<rect x="64" y="30" width="8" height="60"/);
});
