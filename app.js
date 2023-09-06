console.log("Hello World!\n==========\n");

// Exercise 1 Section
/*
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}
*/
let counter = 100
while (counter > 0){
    if (counter % 2 != 0) {
        console.log(counter);
    }
    counter--;
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
/*
for (let i = 1; i <= 100; i++) {
    let output = '';
    if (i % 3 == 0) {
        output += 'FIZZ'
    }
    if (i % 5 == 0) {
        output += 'BUZZ'
    }
    if (output != '') {
        console.log(output)
    }
}
*/
let counter2 = 1
while (counter2 <= 100){
    let output = '';
    if (counter2 % 3 == 0) {
        output += 'FIZZ';
    }
    if (counter2 % 5 == 0) {
        output += 'BUZZ';
    }
    if (output != '') {
        console.log(output);
    }
    counter2++;
}

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 0; i <= n; i++){
    if (i == value){
        console.log('found ' + value);
        break;
    }
    if (i == n) {
        console.log('did not find ' + value);
    }
}
