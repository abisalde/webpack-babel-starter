// Currying
function add(a) {
    return function (b) {
        return a + b;
    };
}

console.log(add(1)(5));

const add2 = (a) => (b) => a + b;
console.log(add2(1)(7));
