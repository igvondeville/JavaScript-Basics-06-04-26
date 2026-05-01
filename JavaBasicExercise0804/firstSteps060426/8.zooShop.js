function animalFood(numDog, numCat){
    let priceDog = 2.50;
    let priceCat = 4;
    let totalAmount = (priceDog * numDog) + (priceCat * numCat);
    console.log(`${totalAmount} lv.`);
}
animalFood(3, 6);