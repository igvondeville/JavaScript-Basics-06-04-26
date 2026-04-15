function basketballEquipment(trainPerYear) {
  
  let pricePerTrain = trainPerYear

  let priceSneakers = pricePerTrain * 0.60
  let priceSuit = priceSneakers * 0.80
  let priceBall = priceSuit * (1/4) 
  let priceAcc = priceBall * (1/5)

  let totalPriceEquipment = pricePerTrain + priceSneakers + priceSuit + priceBall + priceAcc
    
  console.log(totalPriceEquipment)

}
basketballEquipment(365)
