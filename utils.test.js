const { add } = require('./utils')

describe('add function', () => {
  test('adds two positive numbers', () => {
    expect(add(2, 4)).toBe(5)
  })

  test('adds a positive and a negative number', () => {
    expect(add(7, -2)).toBe(5)
  })

  test('adds two negative numbers', () => {
    expect(add(-4, -6)).toBe(-10)
  })

  test('adds zero correctly', () => {
    expect(add(0, 5)).toBe(5)
    expect(add(5, 0)).toBe(5)
  })

  test('works with floating point numbers', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3)
  })
})
