/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    const n = str1.length;
    if (n !== str2.length) {
        return false;
    }
    let c = Array(26).fill(0);
    for (let i = 0; i < n; i++) {
        c[str1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        c[str2[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }
    for (let char of c) {
        if (char !== 0) {
            return false;
        }
    }
    return true;
}
