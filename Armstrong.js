function isArmstrong(num) {
    // Convert the number to a string to easily access its digits
    let numStr = num.toString();
    let numberOfDigits = numStr.length;
    
    // Calculate the sum of each digit raised to the power of the number of digits
    let sum = 0;
    for (let digit of numStr) {
        sum += Math.pow(parseInt(digit), numberOfDigits);
    }

    // Check if the sum equals the original number
    return sum === num;
}

// Example usage:
let number = 153;
if (isArmstrong(number)) {
    console.log(${number} is an Armstrong number.);
} else {
    console.log({number} is not an Armstrong number.);
}