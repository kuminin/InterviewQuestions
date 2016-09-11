// Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

const assert = require('assert');

/**
 * @param {String} string
 * @return {Boolean}
 */
var isUnique = function (string) {
    // Create an Array of length 128 since there are a total of 128 characters
    // to test from the ascii table.
    var bitMap = new Array(128);

    for (var char = 0; char < string.length; char++) {

        // Get the ascii code from the character at index char.
        // Where char is from 0 - string.length-1.
        var charCode = string.charCodeAt(char);

        // Check if the character has been looked up before.
        if (!bitMap[charCode])
            bitMap[charCode] = true;
        else
            return false;
    }
    return true;
};

assert(isUnique('hello world') === false);
assert(isUnique('hi') === true);
assert(isUnique('') === true);
assert(isUnique('`1234567890-=~!@#$%^&*()_+qwertyuiop[]\QWERTYUIOP{}|asdfghjkl;\'ASDFGHJKL:"zxcvbnm,./ZXCVBNM<>?') == true);