function sumOfNum (numberAsText){
    let sum = 0;

    for (let i = 0; i < numberAsText.length; i++ ){
        sum += Number(numberAsText[i]);

        //another option:
        //let currentChar = numberAsText [i];
        //let charAsNum = Number(currentChar);
        //sum += charAsNum;
    }
    console.log(`The sum of the digits is:${sum}`);
}
sumOfNum("1234");