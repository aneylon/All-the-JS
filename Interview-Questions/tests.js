QUnit.test('Is Unique', function(assert){
  assert.ok(isUnique('abc'), 'Simple answer is simple.')
  assert.ok(isUnique('Unique'), 'Unique is unique.')
  assert.notOk(isUnique('abbc'), 'Doubles don\'t work.')
  assert.notOk(isUnique('mississippi'), 'Too many repeats, don\'t check em all.')
})