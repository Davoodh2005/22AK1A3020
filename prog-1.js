function reverseWordsInString(str) {
    // Split the string into an array of words
    let wordsArray = str.split(" ");

    // Reverse each word in the array
    let reversedWordsArray = wordsArray.map(word => word.split("").reverse().join(""));

    // Join the reversed words back into a string
    let reversedString = reversedWordsArray.join(" ");

    return reversedString;
}

// Example usage:
let inputString = "Hello World";
let result = reverseWordsInString(inputString);
console.log(result);  