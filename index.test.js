const { push, pop, unshift, shift, hasDuplicates } = require('./index.js');

describe('push', () => {
  it('should add an element to the end of an array', () => {
    const arr = ['a', 'b', 'c'];
    expect(push(arr, 'd')).toBe(4);
    expect(arr.length).toBe(4);
    expect(arr[3]).toBe('d');
  });
});

describe('pop', () => {
  it('should remove the last element from an array', () => {
    const arr = ['a', 'b', 'c'];
    expect(pop(arr)).toBe('c');
    expect(arr.length).toBe(2);
    expect(arr[1]).toBe('b');
  });
});

describe('unshift', () => {
  it('should add an element to the front of an array', () => {
    const arr = ['a', 'b', 'c'];
    expect(unshift(arr, 'd')).toBe(4);
    expect(arr.length).toBe(4);
    expect(arr[0]).toBe('d');
  });
});

describe('shift', () => {
  it('should remove first element from an array', () => {
    const arr = ['a', 'b', 'c'];
    expect(shift(arr)).toBe('a');
    expect(arr.length).toBe(2);
    expect(arr[0]).toBe('b');
  });
});

describe('hasDuplicates', () => {
  it('should return true if an array has duplicates', () => {
    const arr = ['a', 'b', 'c', 'a'];
    expect(hasDuplicates(arr)).toBe(true);
  });
  it('should return false if an array has no duplicates', () => {
    const arr = ['a', 'b', 'c'];
    expect(hasDuplicates(arr)).toBe(false);
  });
});