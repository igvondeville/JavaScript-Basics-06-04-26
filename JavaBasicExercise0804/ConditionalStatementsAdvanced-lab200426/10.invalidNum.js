function invalidNum(num){
    let isValid = num >= 100 && num <=200 || num == 0;
    if (!isValid){
console.log('invalid');
    }
}
invalidNum(100);