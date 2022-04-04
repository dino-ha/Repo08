var total = 0;

function funcWithArg(digit){

    var digit = (digit + 9)/5;
    return digit;
}

total = funcWithArg(6);
console.log(total);

module.exports = funcWithArg;