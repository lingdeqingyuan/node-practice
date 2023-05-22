/**
 * Create buffer methods
 */

// 1.
const buffer = Buffer.alloc(10)
console.log(buffer) 

// 2.
const buffer2 = Buffer.allocUnsafe(10)
console.log(buffer2)

// 3.
const buffer3 = Buffer.from('123')
console.log(buffer3)