function classifyNumber(num) {
    // Function to find the sum of divisors of the number
    function sumOfDivisors(n) {
        let sum = 0;
        for (let i = 1; i <= n / 2; i++) {
            if (n % i === 0) {
                sum += i;
            }
        }
        return sum;
    }

    // Calculate the sum of divisors
    const sum = sumOfDivisors(num);

    // Classify the number based on the sum of divisors
    if (sum === num) {
        return "Perfect";
    } else if (sum > num) {
        return "Abundant";
    } else {
        return "Deficient";
    }
}

// Example usage:
let number = 28;
let result = classifyNumber(number);
console.log('${number} is a ${result} number.');