
//  
QUnit.test('Add it up.', function(assert) {
  assert.ok(add(1, 2) == 3, 'Adds numbers correctly.')
  assert.ok(add(3, '5') == '35', 'Concat numbers and strings.')
  assert.ok(add('3', 5) == '35', 'Concat strings and numbers.')
  assert.ok(add('com', 'bow'), 'Concat two strings.')
  assert.ok(didUse(add,'+'),'Use the "+" operator.')
})

QUnit.test('Subtract', function(assert) {
  assert.ok(sub(3,2) === 1, 'Subtracts correctly.')
  assert.ok(didUse(sub, '-'), 'Use the "-" operator.')
})

QUnit.test('Multiplcation', function(assert) {
  assert.ok(multi(2,3) == 6, 'Multiplies correctly.')
  assert.ok(didUse(multi, '*'), 'Use the "*" operator.')
})