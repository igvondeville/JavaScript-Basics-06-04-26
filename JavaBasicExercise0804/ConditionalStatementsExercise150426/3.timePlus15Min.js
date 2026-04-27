function time(hours, minutes){
let hoursNum = hours;
let minutesNum = minutes;
let minutesSum = minutesNum + 15;

if (minutesSum >= 60) {
    minutesSum -= 60;
    hoursNum++;
} if (hoursNum >= 24){
 hoursNum = 0;
}
console.log(`${hoursNum}:${minutesSum < 10 ? '0' : ''}${minutesSum}`);
}
time(1, 46);