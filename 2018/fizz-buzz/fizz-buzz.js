function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "fizzbuzz";
    } else if (num % 3 === 0) {
        return "fizz";
    } else if (num % 5 === 0) {
        return "buzz"
    }
    return "";
}


console.log(fizzBuzz(3)); //Expected: fizz
console.log(fizzBuzz(5)); //Expected: buzz
console.log(fizzBuzz(4)); //Expected: ""
console.log(fizzBuzz(15)); //Expected: fizzbuzz