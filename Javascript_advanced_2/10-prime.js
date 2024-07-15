function countPrimeNumbers() {
    let count = 0;

    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    }
    
    for (let num = 2; num <= 100; num++) {
        if (isPrime(num)) {
            count++;
        }
    }

    return count;
}

const startTotal = performance.now();
for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
}
const endTotal = performance.now();

console.log(`Execution time of calculating prime numbers 100 times was ${endTotal - startTotal} milliseconds.`);
