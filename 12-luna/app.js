const card = "4335-5678-4545-4541";


console.log(lunaCheck(card))

function lunaCheck (card) {

    let checkSum = 0;
    // delete simbol "-"
    let newNum = card.replaceAll('-','');

    // Convert string to array and to num
    let tmpArr = newNum
        .split("")
        .map(strNum => parseInt(strNum));

    // iterate through array
    for (var n =  0; n <= tmpArr.length-1; n++) {
        // double every second digit
        if ((n % 2) == 0) {
            tmpArr[n] = tmpArr[n] * 2;
            // if digit more than 9 do -9
            if (tmpArr[n] > 9 ) {
                tmpArr[n] -= 9;
            }
        }
    }

    // sum digits
    tmpArr.map( num => checkSum += num);

    // check if its mod to 10
    return (checkSum % 10) == 0 ? true : false;
}