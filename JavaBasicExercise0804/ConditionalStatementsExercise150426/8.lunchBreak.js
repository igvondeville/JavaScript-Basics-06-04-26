function lunchBreak(name, time, breakTime){
let seriesName = name;
let episodeTime = time;
let breakT = breakTime;

let eatingTime = breakT / 8;
let restTime = breakT / 4;

let timeLeft = breakT - eatingTime - restTime; 

if(episodeTime <= timeLeft) {
    console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(timeLeft-episodeTime)} minutes free time.`)
} else {
    console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(episodeTime-timeLeft)} more minutes.`)
}
}
lunchBreak("Teen Wolf", 48, 60);