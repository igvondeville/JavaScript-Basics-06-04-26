function workingHours(num, day){
    let workingDays = ['Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday'];
if(num >= 10 && num <= 18 && workingDays.includes(day)){
console.log('open');
} else {
    console.log('closed');
}
}
workingHours(11, 'Monday');