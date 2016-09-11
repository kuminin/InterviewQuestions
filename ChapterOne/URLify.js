// URLify: write a method to replace all spaces in a string with '%20'. You may
// assume that the string has sufficient space at the end to hold the
// additional characters, and that you are given the "true" length of the
// string. (Note: If implementing in java, please use a character array so
// that you can perform this in one place.)

const assert = require('assert');

/**
 * @param {String} s1
 * @param {Number} n1
 */
var URLify = function(s1, n1) {
    // First, trim any white spaces that occur before or after the word.
    // Second, split the word into an array of strings by ' '.
    // Finally, join the array of strings back by %20.
    return s1.trim().split(' ').join('%20');
};

assert(URLify("Mr John Smith    ", 13) === "Mr%20John%20Smith");
assert(URLify("Hello World", 9) === "Hello%20World");