// Load ‘Robb.js’
var Robb = require('../src/robb.js');

/**
 * Test ‘isUppercase’
 *
 * @param {object} test
 */
exports.isUppercase = function(test) {

  var uppercase = [
    ['A'],
    ['ABC'],
    ['DEFGH'],
    ['A', 'B', 'C']
  ];
  
  uppercase.forEach(function(letter) {
    var result = Robb.isUppercase.apply( Robb, letter );
    test.strictEqual( result, true );
  });

  test.done();

};