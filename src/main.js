'use strict'
let TOP_NUMBER = ["._.", "...", "._.", "._.", "...", "._.", "._.", "._.", "._.", "._."]
let CENTRE_NUMBER = ["|.|", "..|", "._|", "._|", "|_|", "|_.", "|_.", "..|", "|_|", "|_|"]
let BOTTOM_NUMBER = ["|_|", "..|", "|_.", "._|", "..|", "._|", "|_|", "..|", "|_|", "..|"]

module.exports = function number(num) {

    return ArrayToString(num);
}

function ArrayToString(num) {
    let numbers = num.split('');
    let numStr1 = [];
    let numStr2 = [];
    let numStr3 = [];

    numbers.map(item => {
        numStr1.push(TOP_NUMBER[item])
        numStr2.push(CENTRE_NUMBER[item])
        numStr3.push(BOTTOM_NUMBER[item])
    })
    return numStr1.join(" ") + "\n" + numStr2.join(" ") + "\n" + numStr3.join(" ") + "\n"
}