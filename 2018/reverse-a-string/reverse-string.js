function reverseString(word) {
    let reversedWord = word.split("").reverse().join("");

    return reversedWord;
}

/* A better solution would be this
function reverseString(word) {
    let reversedWord = "";

    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }

    return reversedWord;
}
*/

console.log(reverseString("god"));
console.log(reverseString("dracula"));
console.log(reverseString("javascript"));