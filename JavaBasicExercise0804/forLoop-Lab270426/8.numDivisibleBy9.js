function divisibleBy9(startNum, endNum) {
    let sum = 0;
    for (let n = startNum; n <= endNum; n++) {
        if (n % 9 == 0) {
            sum += n;
        }
    }
    console.log(`The sum: ${sum}`);

    for (let n = startNum; n <= endNum; n++) {
        if (n % 9 == 0) {
            console.log(n);
        }
    }
}
divisibleBy9(100, 200);