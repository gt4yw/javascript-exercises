const sumAll = function(start, end) {
    let result = 0
    if ( (!(Number.isInteger(start))) || (!(Number.isInteger(end)))) {
        return "ERROR";
    } else if (start<0 || end<0) {
        return "ERROR";
    } else if (end<start) {
        let x = start;
        start = end;
        end  = x;
    }
    for (let i=start; i<=end; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
