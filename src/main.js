'use strict'
let TOP_NUMBER  =   ["._.","...","._.","._.","...","._.","._.","._.","._.","._."]
let CENTRE_NUMBER = ["|.|","..|","._|","._|","|_|","|_.","|_.","..|","|_|","|_|"]
let BOTTOM_NUMBER = ["|_|","..|","|_.","._|","..|","._|","|_|","..|","|_|","..|"]

module.exports =  function number (num){
    return TOP_NUMBER[num]+"\n"+CENTRE_NUMBER[num]+"\n"+BOTTOM_NUMBER[num]+"\n";
}
