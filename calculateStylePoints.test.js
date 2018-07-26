const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
  it('notes equal to 57', () => {
    const actual = calculateStylePoints( [19, 19.5, 19, 19, 19]);
      expected = 57;
    assert.equal(actual, expected);
    });
  it('notes equal to 48', () => {
    const actual = calculateStylePoints( [15.5, 16, 16, 16, 16.5]);
      expected = 48;
    assert.equal(actual, expected);
    });
  it('all refrees gave same notes', () => {
    const actual = calculateStylePoints( [19, 19, 19, 19, 19]);
      expected = 57;
    assert.equal(actual,expected);
  });
  it('only even notes', () => {
    const actual = calculateStylePoints( [12, 14, 16, 18, 20]);
      expected = 48;
    assert.equal(actual,expected);
  });
  it('max style notes', () => {
    const actual = calculateStylePoints( [20, 20, 20, 20, 20]);
      expected = 60;
    assert.equal(actual,expected);
  });
})