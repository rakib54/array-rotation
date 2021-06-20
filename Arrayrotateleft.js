function rotateLeft(n, d) {
    for (let i = 0; i < d; i++) {
        const a = n.shift();
        n.push(a)
    }
    return n;
}

const array = [1, 2, 3, 4, 5];
const leftRotationPerformed = 2;

const result = rotateLeft(array, leftRotationPerformed)
console.log(result);
