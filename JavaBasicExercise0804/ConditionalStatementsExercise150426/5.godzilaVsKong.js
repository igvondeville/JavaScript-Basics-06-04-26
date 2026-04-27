function godzilaVsKong (budget, people, priceClothes){

    let movieBudget = budget;
    let peopleNum = people;
    let pricePerPerson = priceClothes;

    let decorPrice = movieBudget * 0.10;
    
    let clothesTotalPrice = pricePerPerson * peopleNum;

    if (peopleNum > 150) {
        clothesTotalPrice *= 0.90; 
    }
    let totalExpenses = decorPrice + clothesTotalPrice;

    if(totalExpenses > movieBudget){
     console.log("Not enough money!");
     console.log(`Wingard needs ${(totalExpenses - movieBudget).toFixed(2)} leva more.`); 
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(movieBudget - totalExpenses).toFixed(2)} leva left.`)
    }
}
godzilaVsKong(15437.62, 186, 57.99);