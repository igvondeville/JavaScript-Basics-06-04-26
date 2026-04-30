function toyShop(trip, puzzle, dolls, bears, minions, trucks){
    let tripPrice = trip;
    let puzzlesCount = puzzle;
    let dollsCount = dolls;
    let bearsCount = bears;
    let minionsCount = minions;
    let truckCount = trucks;

    toysPrice = puzzlesCount * 2.60 + dollsCount * 3 + bearsCount * 4.10 + minionsCount * 8.20 + truckCount * 2;
    toysTotalCount = puzzlesCount + dollsCount + bearsCount + minionsCount + truckCount;

    if (toysTotalCount >= 50) {
        toysPrice *= 0.75;
    }  
    let sumAfterRent = toysPrice * 0.90

    if(sumAfterRent >= tripPrice) {
        console.log(`Yes! ${(sumAfterRent - tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice - sumAfterRent).toFixed(2)} lv needed.`)
    }
}
toyShop (320, 8, 2, 5, 5, 1);