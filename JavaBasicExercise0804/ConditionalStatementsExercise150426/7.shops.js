function shopping(budget, videocard, processor, ram){
    let budgetP = budget;
    let cardCount = videocard;
    let processorCount = processor;
    let ramMemory = ram;

    let cardSum = cardCount * 250;
    let processorPrice = (cardSum * 0.35) * processorCount;
    let ramPrice = (cardSum * 0.10) * ramMemory;
    
    
    let materialsSum = cardSum + processorPrice + ramPrice;


    if(cardCount > processorCount){
        materialsSum *= 0.85;
    }
    if (budgetP >= materialsSum) {
        console.log(`You have ${(budgetP - materialsSum).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(materialsSum - budgetP).toFixed(2)} leva more!`)
    }
}
shopping(900, 2, 1, 3);