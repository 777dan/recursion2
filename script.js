function fact(n) {
    if (n <= 1) {
        return 1;
    }
    else {
        return n *  fact(n - 1);
    }
}

document.write(fact(4));