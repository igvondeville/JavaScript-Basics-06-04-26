function newHome(type, count, budget) {
    let flowerType = type;
    let flowerCount = count;
    let flowerBudget = budget;

    let priceTotal = 0;

    switch (flowerType) {
        case 'Roses':
            priceTotal = flowerCount * 5;
            if (flowerCount > 80) {
                priceTotal *= 0.90;
            }
            break;
        case 'Dahlias':
            priceTotal = flowerCount * 3.80;
            if (flowerCount > 90) {
                priceTotal *= 0.85;
            }
            break;
        case 'Tulips':
            priceTotal = flowerCount * 2.80;
            if (flowerCount > 80) {
                priceTotal *= 0.85;
            }
            break;
        case 'Narcissus':
            priceTotal = flowerCount * 3;
            if (flowerCount < 120) {
                priceTotal *= 1.15;
            }
            break;
        case 'Gladiolus':
            priceTotal = flowerCount * 2.50;
            if (flowerCount < 80) {
                priceTotal *= 1.20;
            }
            break;
    }
                if (flowerBudget >= priceTotal) {
                console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${(flowerBudget - priceTotal).toFixed(2)} leva left.`);
            } else {
                console.log(`Not enough money, you need ${(priceTotal - flowerBudget).toFixed(2)} leva more.`)
            }

}
newHome('Tulips', 88, 260);