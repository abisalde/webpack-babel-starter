const { slice } = require('lodash');

function greet(fn) {
    console.log(fn());
}

function sayHello() {
    return function () {
        return 'Hello World';
    };
}

let fn = sayHello();
let message = fn();

message;

let numbers = [1, 2, 3];
numbers.map((num) => num * 2);

setTimeout(() => console.log('Hello World'), 1000);

let input = '  JavaScript  ';
let output = '<div>' + input.trim() + '</div>';

console.log(output);

const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}</div>`;
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
const toLowerCase = (str) => str.toLowerCase();

const result = wrap('span')(toLowerCase(trim(input)));

console.log(result);

const person = {
    name: 'John',
    address: { country: 'USA', city: 'San Francisco' },
};

const key = {
    ...person,
    address: { ...person.address, city: 'New York' },
    name: 'Bob',
};

console.log(key);

console.log(person);

const numbers2 = [1, 2, 3];

//Adding
const index = numbers2.indexOf(2);
const added = [...numbers2.slice(0, index), 4, ...numbers2.slice(index)];

console.log(added);
// removing
const remove = numbers2.filter((n) => n !== 2);
console.log(remove);

//Updating
const mapUpdate = numbers.map((n) => (n === 2 ? 20 : n));
console.log(mapUpdate);

let book = { title: 'JavaScript' };

function publish(book) {
    book.isPublished = true;
}

publish(book);

console.log(book);
