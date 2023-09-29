const fizzBuzz = require("./fizzBuzz")

describe('fizzBuzz', () => {
  test('should be defined', () => {
    expect(fizzBuzz).toBeDefined()
  })

  test('should return an array', () => {
    const result = fizzBuzz()
    expect(result).toBeInstanceOf(Array)
  })

  test('should return an array from 1 to 100', () => {
    const result = fizzBuzz()

    expect(result.length).toBe(100)
    expect(result[0]).toBe(1)
    expect(result[3]).toBe(4)
    expect(result[40]).toBe(41)
    expect(result[90]).toBe(91)
    expect(result[28]).toBe(29)
    expect(result[72]).toBe(73)
    expect(result[96]).toBe(97)
  })

  test('should fail returning values greater than 100', () => {
    const result = fizzBuzz()

    expect(result[99]).not.toBe(101);
  })

  test('should return Fizz for multiple of 3', () => {
    const result = fizzBuzz()

    expect(result[35]).toBe("Fizz");
    expect(result[92]).toBe("Fizz");
    expect(result[2]).toBe("Fizz");
    expect(result[11]).toBe("Fizz");
    expect(result[32]).toBe("Fizz");
  })

  test('should return Buzz for multiple of 5', () => {
    const result = fizzBuzz()

    expect(result[24]).toBe("Buzz");
    expect(result[39]).toBe("Buzz");
    expect(result[49]).toBe("Buzz");
    expect(result[64]).toBe("Buzz");
    expect(result[99]).toBe("Buzz");
  })

  test('should return FizzBuzz for multiples of 3 and 5', () => {
    const result = fizzBuzz()

    expect(result[14]).toBe("FizzBuzz");
    expect(result[29]).toBe("FizzBuzz");
    expect(result[44]).toBe("FizzBuzz");
    expect(result[59]).toBe("FizzBuzz");
    expect(result[89]).toBe("FizzBuzz");
  })

  test.each(
    [
      { maxValue: 91 },
      { maxValue: 11 },
      { maxValue: 901 },
      { maxValue: 368 },
      { maxValue: 6544 },
    ]
  )('should return an array from 1 to $maxValue', ({ maxValue }) => {
    const result = fizzBuzz(maxValue)

    expect(result.length).toBe(maxValue)
    expect(result[maxValue - 1]).toBe(maxValue)
  })

  test.each(
    [
      { minValue: 10, maxValue: 91 },
      { minValue: 18, maxValue: 6544 },
      { minValue: 30, maxValue: 901 },
      { minValue: 13, maxValue: 368 },
      { minValue: 1, maxValue: 11 },
    ]
  )('should return an array from $minValue to $maxValue', ({ minValue, maxValue }) => {
    const result = fizzBuzz(maxValue, minValue)

    expect(result[0]).toBe(minValue)
    expect(result[result.length - 1]).toBe(maxValue)
  })
})

