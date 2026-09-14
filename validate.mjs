import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const theme = JSON.parse(readFileSync(new URL('./index.json', import.meta.url), 'utf8'));
assert.equal(theme.spec, 3);
assert.equal(theme.main.type, 'dark');
assert.equal(Object.keys(theme.main.semantic).length, 38);
assert.equal(Object.keys(theme.main.raw).length, 30);
for (const [key, entry] of Object.entries(theme.main.semantic)) {
  assert.ok(!Array.isArray(entry), `${key}: spec-3 does not accept color arrays`);
  if (typeof entry === 'string') {
    assert.match(entry, /^#[\da-f]{6}$/i, key);
  } else {
    assert.equal(entry.type, 'raw', key);
    assert.match(entry.value, /^#[\da-f]{6}$/i, key);
    assert.ok(entry.opacity >= 0 && entry.opacity <= 1, key);
  }
}
for (const [key, color] of Object.entries(theme.main.raw)) {
  assert.match(color, /^#[\da-f]{6}([\da-f]{2})?$/i, key);
}
assert.equal(theme.main.semantic.SCROLLBAR_THIN_TRACK.opacity, 0);
assert.equal(theme.plus.iconpack, 'rosiecord-plumpy');
console.log('PASS: spec-3 structure, 38 semantic colors, 30 raw colors, opacity and icon pack.');
