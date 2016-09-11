// Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.

const assert = require('assert');

/**
 * @param {String} s1
 * @param {String} s2
 * @return {Boolean}
 */
var checkPermutation = function(s1, s2) {
    // Declare a variable sum to keep track of the ascii values for each
    // characters in the string.
    var sum = 0;

    if (s1.length != s2.length)
        return false;

    // Add the ascii values for each character in s1 and subtract for s2.
    for (var i = 0; i < s1.length; i++)
        sum = sum + s1.charCodeAt(i) - s2.charCodeAt(i);

    // If the sum is 0, then we know s1 and s2 are permutation of each other.
    // Else then we know that s1 and s2 were not permutations of each other.
    return sum === 0;
};

assert(checkPermutation('abc', 'cab') === true);
assert(checkPermutation('the quick brown fox jumps over the lazy dog', 'thebrownquickfoxlazydogthe jumps over      ') === true);
assert(checkPermutation('!@#$%^&*()_+', '!@#$%a&*()_+') === false);
assert(checkPermutation('', ' ') === false);
