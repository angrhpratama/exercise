// ===================number 1
let multiplication;

let input = 9
let limit = 5

for (let i = 1; i <= limit; i++){
    console.log(i * input);
}

// ==================number2

let name = 'madam';

if (name == 'madam'){
    console.log('is a palindrome string');
} else{
    console.log('not a palindrome string');
}

// =================number3

const cm = 100000
let km = (cm / 100000);

console.log(`100000 cm = ${km}km`)


// =================number4

const price = 1000;
let idrRupiah = 'Rp. 1.000.00'

console.log(`The conversion of ${price} is ${idrRupiah}`)


// =================number5

const string = 'Hello World';
const pecah = string.split(' ')
let result = pecah[0];
let rplc = result.replace (/l|e/g, '')
let combine = rplc + ' ' + pecah [1] 
console.log(combine);


// ================number 6
const word1 = 'hello'; {
    let word1Step1 = word1.split('')
    let word1Step2 = word1Step1[0]
    let word1Step3 = word1Step2.toUpperCase() + word1Step1[1] 
    + word1Step1[2] + word1Step1[3] + word1Step1[4]
    console.log(word1Step3);


const word2 = 'world'; 
    let word2Step1 = word2.split('')
    let word2Step2 = word2Step1[0]
    let word2Step3 = word2Step2 .toUpperCase() + word2Step1[1]
    + word2Step1[2] + word2Step1[3] + word2Step1[4]
    console.log(word2Step3);

    let resultCombine = word1Step3 + ' ' + word2Step3
    console.log(resultCombine);
}



// ================number 7

const word = 'hello';{
    let stepRvrs = word.split('')
    let stepResult = stepRvrs.reverse()
    let stepCombine = stepResult.join('')
    console.log(stepCombine);
}

const wOrd = 'hello'
let stepOne = wOrd.split('')
let wOrdReverse = stepOne.reverse()
console.log(wOrdReverse);

// ================number 8

function swap(strings) {
    let message = ''
    let splits = strings.split('');
    console.log(splits);
    for (let i = 0; i < string.length; i++){
        if (splits[i] === splits[i].toUpperCase()) {
            splits[i] = splits[i].toLowerCase();
        } else {
            splits[i] = splits[i].toUpperCase();
        }
    }
message = splits.join('')
return message;
}
console.log(swap('The Quick Brown Fox'));

// ================number 9
const num1 = 42
const num2 = 27

if (num1 > num2) {
console.log('largest than num2');
} else {
    console.log('');
}

// ================number 10

let numbers = [43, 27, 18]
numbers.sort()
console.log(numbers);

// const a = 43
// const b = 27
// const c = 18

// if (a && b > c) {
//     console.log(c,b,a);
// }else{
//     console.log(a,c,b);
// }

// ================number 11

let typeS = 'hello'
let typeS1 = 12345
let typeS2 = false

console.log(`${typeof(typeS)}==>1, ${typeof(typeS1)} ==> 2, ${typeof(typeS2)} ==>3`)


// ================number12

let sentence = 'An apple a day keeps the doctor away'

console.log(sentence.replace(/A|a/g,'*'));

