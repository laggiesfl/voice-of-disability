import fs from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';

const nav = fs.readFileSync(new URL('../app/components/Nav.tsx', import.meta.url), 'utf8');

test('desktop navigation exposes exactly one prominent Open Voice of Disability App link', () => {
  const matches = nav.match(/Open Voice of Disability App/g) ?? [];
  assert.equal(matches.length, 1);
  assert.match(nav, /<Link href="\/app-home" className="btn btn-primary nav-cta">\s*Open Voice of Disability App\s*<\/Link>/);
});
