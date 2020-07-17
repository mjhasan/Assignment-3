//feet to Mile converter function name is feeToMile.
function feetToMile(feet) {
    if (feet < 1) {
        return 'Enter a valid number!';
    }
    var mile = feet / 5280;
    return feet + " Feet = " + mile + ' Mile';
}
var result = feetToMile(10000);
console.log(result);

//Takes three different furniture itemts number and calculate how many wood. 
function woodCalculator(chair, table, bed) {
    var chairWood = chair * 1;
    var tablaWood = table * 3;
    var bedWood = bed * 5;
    totalWood = chairWood + tablaWood + bedWood;
    return 'You need ' + totalWood + ' cubic feet wood.';
}
console.log(woodCalculator(1, 1, 1));

//Take a floor input and calculate how many brick is need for that floor.
function brickCalculator(floor) {
    if (floor < 1) {
        return "It's a invalid number.";
    }
    var totalBrick;
    var floorHeight;
    if (floor <= 10) {
        floorHeight = floor * 15;
        totalBrick = floorHeight * 1000;
    } else if (floor <= 20) {
        floorHeight = floor * 12;
        totalBrick = floorHeight * 1000;
    } else {
        moreFloor = floor - 20;
        floorHeight = floor * 10;
        totalBrick = floorHeight * 1000;
    }
    return "You need " + totalBrick + " brick.";
}
console.log(brickCalculator(10));

//Take a input friends name array and return the smallest name.
function tinyFriend(array) {
    if (typeof array != "object") {
        return 'Your array is invalid!';
    }
    var smallName = array[0];
    for (var i = 1; i < array.length; i++) {
        var element = array[i];
        if (smallName.length > element.length) {
            smallName = element;
        }
    }
    return "The small name from your friend is " + smallName + ".";
}

var friendName = ['Jahid', 'Monna', 'Asadul', 'Momo', 'Shamim', 'Miftah'];
console.log(tinyFriend(friendName));