// Palindrome Permutation: Given a string, write a function to check if it is
// a permutation of a palindrome. A palindrome is a word or phrase that is
// the same forwards and backwards. A permutation is a rearragement of
// letters. The palindrome doesn't need to be limited to just dictionary words.

const assert = require('assert');

/**
 * Returns a function that has been called to return an array of length that's
 * been given as an argument.
 * @param  {Number} length
 * @return {Array}
 */
var createArray = (length) => {
    return (() => {
        var array = [];
        for (var i = 0; i < length; i++) {array.push(0)}
        return array;
    })();
};

/**
 * Checks to see if the given string is a permutation of a palindrome.
 * @param  {Array} bitMap
 * @param  {String} string
 * @param  {Boolean} centerFlag
 * @return {Boolean}
 */
var checkPalindrome = function (bitMap, string, centerFlag) {
    for (var i = 0; i < bitMap.length; i++) {
        if (string.length % 2 === 0 && bitMap[i] % 2 !== 0) {
            // If the string length is even and contains a character that's odd
            // then the string is not a palindrome.
            return false;
        } else {
            // If the string length is odd and there contains a characters
            // that has been only used once then the string is not a
            // palindrome.
            if (centerFlag && bitMap[i] % 2 === 1)
                return false;
            if (bitMap[i] % 2 === 1)
                centerFlag = true;
        }
    }
    return true;
};

/**
 * @param {String} s1
 * @return {Boolean}
 */
var palindromePermutation = function (s1) {

    // Checks to see if the palindrome has a length of 0
    if (s1.length === 0)
        return false;

    var bitMap = createArray(128);

    // trims all whitespaces and replace all spaces with an empty string.
    var string = s1.trim().split(' ').join('').toLowerCase();

    // Increment the value at the character code index for all characters in
    // the string.
    for (var i = 0; i < string.length; i++) {
        bitMap[string.charCodeAt(i)]++;
    }

    return checkPalindrome(bitMap, string, false);
};

assert(palindromePermutation('civic'));
assert(palindromePermutation('ivicc'));
assert(palindromePermutation('civil') == false);
assert(palindromePermutation('livci') == false);