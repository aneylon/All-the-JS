
//  
QUnit.test('Add it up.', function(assert) {
  assert.ok(add(1, 2) == 3, 'Adds numbers correctly.')
  assert.ok(add(3, '5') == '35', 'Concat numbers and strings.')
  assert.ok(add('3', 5) == '35', 'Concat strings and numbers.')
  assert.ok(add('com', 'bow'), 'Concat two strings.')
  assert.ok(didntCheat(add,'+'),'Use the "+" operator.')
})