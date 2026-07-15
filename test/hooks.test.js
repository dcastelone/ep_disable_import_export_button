'use strict';

const assert = require('node:assert/strict');
const test = require('node:test');
const hooks = require('../server/hooks');

test('blocks import and every supported export route shape', async () => {
  const blocked = [
    '/p/pad/import',
    '/p/group$pad/export/pdf',
    '/p/pad/42/export/docx',
  ];
  for (const path of blocked) {
    assert.deepEqual(await hooks.preAuthorize('preAuthorize', {req: {path, ip: '127.0.0.1'}}), [false]);
  }
});

test('does not overmatch lookalike or unrelated paths', async () => {
  const allowed = ['/p/pad', '/p/pad/import/extra', '/p/pad/export', '/api/1/export', '/p/pad/1/export/pdf/extra'];
  for (const path of allowed) {
    assert.deepEqual(await hooks.preAuthorize('preAuthorize', {req: {path, ip: '127.0.0.1'}}), []);
  }
});

test('injects correctly relative CSS on pad and timeslider pages', () => {
  const pad = {content: ''};
  const history = {content: ''};
  hooks.eejsBlock_styles('', pad, () => {});
  hooks.eejsBlock_timesliderStyles('', history, () => {});
  assert.match(pad.content, /href="\.\.\/static\/plugins/);
  assert.match(history.content, /href="\.\.\/\.\.\/static\/plugins/);
});
