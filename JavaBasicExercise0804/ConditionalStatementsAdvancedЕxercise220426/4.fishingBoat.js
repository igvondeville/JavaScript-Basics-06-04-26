function fishingBoat(budget, season, count) {
    let groupBudget = budget;
    let seasonType = season;
    let fishManNum = count;

    let rentPrice = 0;

    if (seasonType === 'Spring') {
        rentPrice = 3000;
    } else if (season === 'Winter') {
        rentPrice = 2600;
    } else {
        rentPrice = 4200;
    }
    if (fishManNum <= 6) {
        rentPrice *= 0.90;
    } else if (fishManNum <= 11) {
        rentPrice *= 0.85;
    } else {
        rentPrice *= 0.75;
    }
    if (fishManNum % 2 === 0 && seasonType !== 'Autumn') {
        rentPrice *= 0.95;
    }
    if (groupBudget >= rentPrice) {
        console.log(`Yes! You have ${(groupBudget - rentPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(rentPrice - groupBudget).toFixed(2)} leva.`);
    }
}
fishingBoat(3600, "Autumn", 6);