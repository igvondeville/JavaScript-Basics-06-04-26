function smartLily(lilysAge, cleaningMachinePrice, singleToyPrice) {

    let toysCounter = 0;
    let savedMoney = 0;
    let stolenMoney = 0;
    let moneyForEven = 0;

    for (let currentAge = 1; currentAge <= lilysAge; currentAge++) {
        if (currentAge % 2 !== 0) {
            toysCounter++;
        } else {
            moneyForEven += 10;;
            savedMoney += moneyForEven;
            stolenMoney++;
        }
    }
    let totalMoneyFromToys = toysCounter * singleToyPrice;
    let totalSavedMoney = totalMoneyFromToys + savedMoney - stolenMoney;

    if (totalSavedMoney >= cleaningMachinePrice) {
        console.log(`Yes! ${(totalSavedMoney - cleaningMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(cleaningMachinePrice - totalSavedMoney).toFixed(2)}`);
    }
}
smartLily(10, 170.00, 6);