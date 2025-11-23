"use strict";
// Q8 - Add Array.prototype.myMap

if (!Array.prototype.myMap) {
    Object.defineProperty(Array.prototype, 'myMap', {
        value: function(callback, thisArg) {
            if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
            const result = [];
            for (let i = 0; i < this.length; i++) {
                if (i in this) {
                    result[i] = callback.call(thisArg, this[i], i, this);
                }
            }
            return result;
        },
        writable: true,
        configurable: true
    });
}

console.log('=== Q8 - Array.prototype.myMap Demo ===');
const arr = [1,2,3];
const doubled = arr.myMap(n => n * 2);
console.log('Original:', arr);
console.log('myMap doubled:', doubled);

// Compare with native map
console.log('native map doubled:', arr.map(n => n * 2));

// Ensure behavior matches for sparse arrays
const sparse = [];
sparse[1] = 10;
const res = sparse.myMap((v, i) => (v === undefined ? 'empty' : v * 2));
console.log('Sparse myMap result:', res);
