function swimWorldRecord(record, distance, timeInSec){
    let worldRecord = record;
    let distanceInMeters = distance;
    let timeInSecsForMeter = timeInSec;

    let neededSec = distanceInMeters * timeInSecsForMeter;
    let delay = Math.floor(distanceInMeters / 15) * 12.5;

    let secWithDelay = neededSec + delay;

    if(secWithDelay < worldRecord) {
        console.log(`Yes, he succeeded! The new world record is ${secWithDelay.toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${(secWithDelay - worldRecord).toFixed(2)} seconds slower.`)
    }
}

swimWorldRecord(10464, 1500, 20);