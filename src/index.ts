/**
 * @license
 * 
 * MIT License
 *
 * Copyright (c) 2019 Richie Bendall
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * The main Pute class.
 * @class
 */
export class Pute {
    /**
     * The main constructor.
     * @constructor
     */
    constructor() {
        if (!(this instanceof Pute)) return new Pute()
    }

    /**
     * Check if 2 values are equal.
     * @method
     * @param {any} func - The function or value to compare
     * @param {any} exp - The expected value
     */
    public assertEqual(func, exp) {
        return func === exp
    }

    /**
     * Check if 2 values are not equal.
     * @method
     * @param {any} func - The function or value to compare
     * @param {any} exp - The expected value
     */
    public assertNotEqual(func, exp) {
        return func !== exp
    }


    /**
     * Check if the values are almost the same (via rounding)
     * @method
     * @param {any} func - The function or value to check
     * @param {any} exp - The expected value
     */
    public assertAlmostEqual(func, exp) {
        return Math.round(func) === Math.round(exp)
    }

    /**
     * Check if the values are not almost the same (via rounding)
     * @method
     * @param {any} func - The function or value to check
     * @param {any} exp - The expected value
     */
    public assertNotAlmostEqual(func, exp) {
        return Math.round(func) !== Math.round(exp)
    }

    /**
     * Check if the first value is greater than the second
     * @method
     * @param {any} func - The function or value to check
     * @param {any} exp - The expected value
     */
    public assertGreater(func, exp) {
        return func > exp
    }

    /**
     * Check if the first value is greater or equal to the second
     * @method
     * @param {any} func - The function or value to check
     * @param {any} exp - The expected value
     */
    public assertGreaterEqual(func, exp) {
        return func >= exp
    }

    /**
     * Check if the first value is less than the second
     * @method
     * @param {any} func - The function or value to check
     * @param {any} exp - The expected value
     */
    public assertLess(func, exp) {
        return func < exp
    }

    /**
     * Check if the first value is less than or equal to the second
     * @method
     * @param {any} func - The function or value to check
     * @param {any} exp - The expected value
     */
    public assertLessEqual(func, exp) {
        return func <= exp
    }

    /**
     * Check if a value resolves to True
     * @method
     * @param {any} func - The function or value to check
     */
    public assertTrue(func) {
        return func === true
    }

    /**
     * Check if a value resolves to False
     * @method
     * @param {any} func - The function or value to check
     */
    public assertFalse(func) {
        return func === false
    }

    /**
     * Check if the value is inside an array
     * @method
     * @param {any} func - The function or value to check
     * @param {any} exp - The expected value
     */
    public assertIn(func, arr) {
        return arr.indexOf(func) !== -1
    }

    /**
     * Check if the value resolves to something equalivent to nothing
     * @method
     * @param {any} func - The function or value to check
     */
    public assertNone(func) {
        return this.assertIn(func, [null, undefined])
    }

    /**
     * Check if the value is of a specific type
     * @method
     * @param {any} func - The function or value to check
     * @param {any} exp - The expected type
     */
    public assertType(func, exp) {
        return typeof func === exp
    }
}