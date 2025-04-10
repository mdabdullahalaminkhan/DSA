

// “Write a program that prints the first 20 numbers of the Fibonacci sequence using a for loop.”


let prev2 = 0;
let prev1 = 1;

console.log(prev2);
console.log(prev1);
for (let fibo = 0; fibo < 18; fibo++) {  // why less than 18 ? because it starts with 0 and run till 17, and by 18 times loop we will make summation of previous two digit and determine new previous two number thus symamtion and previous two numbers continuously changing so qwe will take loop so that we can cal calculate  new sammtion again. 0 1 1 2 3 5 8 13 21
    let newFibo = prev1 + prev2;
    console.log(newFibo);
    prev2 = prev1;
    prev1 = newFibo;
} 
// result would be: 
// 0
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55
// 89
// 144
// 233
// 377
// 610
// 987
// 1597
// 2584
// 4181

// 2. Implementation Using Recursion 

console.log(0);
console.log(1);
let count = 2; // Keeps track of how many numbers have been printed


function fibonacci(prev1, prev2) { // Function that keeps printing next Fibonacci numbers. Stops after printing 20 total numbers
    if (count <= 19) {
        const newFibo = prev1 + prev2;
        console.log(newFibo);
        prev2 = prev1; // changed the value of paremeter to calculate new sum.
        prev1 = newFibo;
        count += 1;
        fibonacci(prev1, prev2);
    } else {
        return;
    }
}

fibonacci(1, 0);


// 3. Finding The nth Fibonacci Number Using Recursion

function F(n) {
    if (n <= 1) {
        return n;
    } else {
        return F(n - 1) + F(n - 2);
    }
}

console.log(F(19));
