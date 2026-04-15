function schoolSuplies(pencilAmount, markersAmount, ltClean, discount){
    let pencilPackage = 5.80;
    let markersPackage = 7.20;
    let cleanPerLt = 1.20;

let pencilPrice = pencilAmount * pencilPackage;
let markersPrice = markersAmount * markersPackage;
let cleanPrice = ltClean * cleanPerLt;
let priceForAll = pencilPrice + markersPrice + cleanPrice;
let priceWithDiscount = priceForAll - (priceForAll * discount / 100);
console.log(priceWithDiscount);
}
schoolSuplies(2, 3, 4, 25);