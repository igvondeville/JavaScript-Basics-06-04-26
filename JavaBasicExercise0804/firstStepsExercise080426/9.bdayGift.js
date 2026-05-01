function aquarium(length, width, high, percent){

    let smLenght = length;
    let smWidth = width;
    let smHigh = high;
    let valuePercent = percent;

    let aquariumCapacity = smLenght * smWidth * smHigh;
    let ltCapacity = aquariumCapacity * 0.001;
    let needLt = ltCapacity * (1-valuePercent/100);

    console.log(needLt);

}

aquarium(85, 75, 47, 17)