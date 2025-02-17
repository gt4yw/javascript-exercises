const removeFromArray = function(list, ...exclude) {
    let result = []
    console.log(exclude)
    for (let i=0; i<list.length; i++) {
        if (!(exclude.includes(list[i]))) {
            result.push(list[i])
        }
    }
    return result;
};

//console.log(removeFromArray([2,3,4,5],4))

// Do not edit below this line
module.exports = removeFromArray;
