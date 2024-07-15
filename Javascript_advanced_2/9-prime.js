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

const start = performance.now();
const primeCount = countPrimeNumbers();
const end = performance.now();

console.log(`${primeCount}`);
console.log(`Execution time of printing countPrimeNumbers was ${end - start} milliseconds.`);
