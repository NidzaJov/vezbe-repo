var ifNumber = function(a){
    if (typeof a === 'number') {
        return true;
    }
    else {
        return false;
    }
}

console.log(ifNumber('a'));
console.log(ifNumber(10));