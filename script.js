// function fact(n) {
//     if (n <= 1) {
//         return 1;
//     }
//     else {
//         return n * fact(n - 1);
//     }
// }

// document.write(fact(3));

function fibonacci(n) {
    if (n <= 1) {
        return 1;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

document.write(fibonacci(4));