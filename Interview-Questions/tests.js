QUnit.test('Is Unique', function(assert) {
  assert.ok(isUnique('abc'), 'Simple answer is simple.')
  assert.ok(isUnique('Unique'), 'Unique is unique.')
  assert.notOk(isUnique('abbc'), 'Doubles don\'t work.')
  assert.notOk(isUnique('mississippi'), 'Too many repeats, don\'t check em all.')
})

QUnit.test('Is Permutation', function(assert) {
  assert.ok(isPermutation('abc','cba'), 'abc and cba are permutations.')
  assert.ok(isPermutation('flog','golf'), 'golf and flog are permutations.')
  assert.notOk(isPermutation('abc', 'abbc'), 'abc and abbc are not permutations.')
  assert.notOk(isPermutation('abbc','abc'), 'the reverse is also false.')
  // handle spaces ?
})