function bonusScore(scoreNum){
let scoreCount = scoreNum;    
let bonus = 0.0;

if(scoreCount <= 100) {
    bonus = 5;
} else if (scoreCount > 100 && scoreCount <= 1000) {
    bonus = scoreCount * 0.20;
} else if (scoreCount > 1000){
    bonus = scoreCount * 0.10;
} 

if (scoreCount % 2 == 0 ) {
    bonus = bonus + 1;
} 
else if (scoreCount % 10 == 5) {
    bonus = bonus + 2;
}
console.log(bonus);
console.log(scoreCount + bonus);
}
bonusScore(20);