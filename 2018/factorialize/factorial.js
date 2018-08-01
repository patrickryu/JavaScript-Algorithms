function factorialize(num) {
    let product = 1;

    //start i from 2 because 1*1 = 1
    for (let i = 2; i <= num; i++) {
        product = product * i;
        console.log(product);
    }
    return product;
}

console.log(factorialize(5));
console.log(factorialize(4));
console.log(factorialize(0));
console.log(factorialize(10));