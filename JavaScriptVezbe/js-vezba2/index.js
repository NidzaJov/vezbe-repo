/* var x = 5;
var y = 10;
var x1 = 15;
var y1 = 20;
var z2 = 0;

function add(a, b) {
    return a + b;
}

var z = add(x, y);
var z1 = add(x1, y1);
console.log('z', z);
console.log('z1', z1);

function add1(a, b) {
    return a + b;
}

add1(x, x1);

console.log('z2', z2);
*/

var str = 'Ja sam polaznik SEDC akademije'
/*var pos = str.indexOf('SEDC');
var pos = str.lastIndexOf('SEDC', 17);

console.log(pos);


var sliced = str.slice(0, -9);
console.log(str);
console.log(sliced, sliced.length);

var subString = str.substring(7, 15);
console.log(subString);

var subStr = str.substr(7, 8);
console.log(subStr);

var repl = str.replace('polaznik', 'noob');
var noSpace = str.replace(' ', '');
console.log(repl);
console.log(noSpace);

*/

/*
var haos = 'OvO neMA UoPsTE smisLa';
var uppercase = haos.toUpperCase();
var lovercase = haos.toLowerCase();

console.log(uppercase);
console.log(lovercase);
console.log(haos);

x = 17;
y = 38;

var newVar = 'prva promenjiva je ' + x + ', a druga je ' + y;
console.log(newVar);

var newString = str.concat(haos);
console.log(newString);

var username = '   nekiUserName  ';
console.log(username);
var trimed = username.trim();
console.log(trimed);

var arrayString = str.split(' ');
console.log(arrayString);

var num = 23.75564654;
var stringNum = num.toString();
console.log(stringNum);
console.log(typeof(stringNum));
var fixed = num.toFixed(10);
console.log('fixed', fixed);
console.log(typeof(fixed));
console.log(fixed + x);
var value = x.valueOf();
console.log(value);
console.log(fixed.valueOf());
console.log(typeof(fixed.valueOf()));
console.log(Number(fixed));
console.log(typeof(Number(fixed)));
console.log(parseInt(fixed));
console.log(parseFloat(fixed));
console.log(parseFloat('text 10 30 77'));
*/

var arr = ['Lazar', 'Marko', 'Janko', 'Dobrila', 'Dejan', 'Aleksandar', 'Strahinja'];
/*
var arrayString = arr.join(' * ');
console.log(arrayString);
arr.pop();
console.log(arr)
var poped = arr.pop();
console.log(poped);
console.log(arr);
var toPush = 'Dragoslav';
arr.push(toPush);
console.log(arr);
var lazar = arr.shift();
console.log(lazar);
var dejan = 'Dejan';
arr.unshift(dejan);
console.log(arr);
*/

//var spliced = arr.splice(3, 2);
//console.log(spliced);
//console.log(arr);
/*
var teachers = arr.slice(4, 7);
console.log(teachers);
console.log(arr);
arr = ['Lazar', 'Marko', 'Janko', 'Dobrila', 'Dejan', 'Aleksandar', 'Strahinja'];
var splicedTeachers = arr.splice(4, 3);
console.log(splicedTeachers);
console.log(arr);

var reordred = splicedTeachers.concat(arr);
console.log(reordred);
*/
/*
var numbers = [2, 4, 6, 78, 32, 1, 777];
var zbir = 0;

for (var i = 0; i < numbers.length; i++) {
    zbir = zbir + numbers[i];
    console.log(zbir);
}

numbers.forEach((number, index) => {
    zbir = zbir + number;
    console.log(zbir, index);
});

for(var i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] + 2;
}

numbers.forEach(function(num)  {
    num = num + 3;
    console.log(num);
});

console.log(numbers);

numbers.forEach((number, index) => {
    numbers[index] = numbers[index] + 2;
})
console.log(numbers);
*/
/*
var teams = ['Crvena Zvezda', 'Partizan', 'Dinamo Vranje', 'Radnicki Nis', 'Real Madrid', 'Dubocica'];

for(i = 0; i < teams.length; i++) {
    var pair = '';
    pair = teams[0];
    
    for(j = 1; j < teams.length; j++) {
        pair = pair + ' : ' + teams[j];
        console.log(pair);
        pair = teams[0];
    }
    var first = teams.shift();
    teams.push(first);
}
*/
/*
var digit = 2;
var arr = [132, 125, 636, 732, 455, 668, 840, 246, 412, 334, 415];

var lastDigitNumbers = arr.filter((number) => {
    if(number.toString().lastIndexOf(digit) == number.toString().length - 1)
        return number;
});

console.log(lastDigitNumbers);
*/
/*
var str = 'shop';

function addLine(someString) {
    someString = '-' + someString + '-';
    return someString;
}

console.log(addLine(str));

function isNumeric(someVariable) {
    if(typeof(someVariable) == 'number') {
        console.log('It is numeric.');
    }    
    else console.log('No, it is not numeric variable.')
}

isNumeric(str);
isNumeric(1);
*/
/*
var numeros = [1, 4, 34, 7.89, 123, 988, 777.890]

function maximum(nums) {
    var max = nums[0]
    nums.forEach((number) => {
        if(max < number) {
            max = number;
        }  
    })
    console.log(max);
}

maximum(numeros);
*/

/*
function getADate() {
    var date = new Date();
    return date.getDate() + '.' + (Number(date.getMonth()) + 1) + '.' + date.getFullYear() + ' ' + date.getHours() + ':' +  date.getMinutes() + ':' + date.getSeconds();
}
console.log(getADate());

function AddMinutesTodate(minutes) {
    var date = new Date();
    date.setMinutes(date.getMinutes() + minutes);
    return date.getDate() + '.' + (Number(date.getMonth()) + 1) + '.' + date.getFullYear() + ' ' + date.getHours() + ':' +  date.getMinutes() + ':' + date.getSeconds();
}

console.log(AddMinutesTodate(20));
*/
/*
var arr = ['2019/02/14', '2016/07/02', '2010/08/30'];

    newFunction(arr);

function newFunction(dates) {
    var max = new Date(dates[0]);
    arr.forEach((date) => {
        if (max < new Date(date)) {
            max = date;
        }
    });
    console.log(max);
}
*/
/*
var digit = 5;
var arr = [132, 125, 636, 732, 455, 668, 840, 246, 412, 334, 415];

function multiplyArrayMemmbers(numbers, multiplier) {
    console.log(numbers.map((number) => {
        return number * multiplier;
    }));
}

multiplyArrayMemmbers(arr, digit);
*/
/*
var arr = [441, 1935, 2116, 9, 17, 1521, 50, 169]

function isRootWhole(numbers) {
    console.log(numbers.map((number) => {
        if(Math.sqrt(number) == Math.round(Math.sqrt(number))) {
            return(Math.sqrt(number))
        }
        else return false;
    }))
}
isRootWhole(arr);
*/

var array1 = [1, 0, 2, 3, 4];
var array2 = [3, 5, 6, 7, 8, 13]

function sumArrays(a1, a2) {
    var shorterLength = Math.min(a1.length, a2.length);

    if(a1.length != a2.length)
    {
        a1 = a1.slice(0, shorterLength);
        a2 = a2.slice(0, shorterLength);
    }
    var sumArray = [];

    for (i = 0; i < shorterLength; i++) {
        sumArray.push(a1[i] + a2[i]);
    }

    console.log(sumArray);
}

sumArrays(array1, array2);
