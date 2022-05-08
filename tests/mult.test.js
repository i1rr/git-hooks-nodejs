const mult = require('../src/mult')

it('should returen correct result', () => {
    const result = mult(7, 8)
    expect(result).toBe(56)
})