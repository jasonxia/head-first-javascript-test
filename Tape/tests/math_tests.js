var test = require('tape');
var math = require('../math');

test("pow(2, 2) should return 4", function(assert){
  var result = math.pow(2, 2);
  assert.equal(result, 4, "result was " + result);
  assert.end();
});

test("pow(2, 3) should return 8", function(assert){
  var result = math.pow(2, 3);
  assert.equal(result, 8, "result was " + result);
  assert.end();
});

test("pow(2, -1) should return 0.5", function(assert){
  var result = math.pow(2, -1);
  assert.equal(result, 0.5, "result was " + result);
  assert.end();
});