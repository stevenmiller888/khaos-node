
/**
 * Dependencies.
 */

var {{titlecase name}} = require('..');
var assert = require('assert');

/**
 * Tests.
 */

describe('{{titlecase name}}()', function() {
  it('should be a function', function() {
    assert.equal(typeof {{titlecase name}}, 'function');
  });

  it('should be a constructor', function() {
    var {{name}} = new {{titlecase name}}();
    assert({{name}} instanceof {{titlecase name}});
  });

  it('should not require the new keyword', function() {
    var {{name}} = {{titlecase name}}();
    assert({{name}} instanceof {{titlecase name}});
  });
});