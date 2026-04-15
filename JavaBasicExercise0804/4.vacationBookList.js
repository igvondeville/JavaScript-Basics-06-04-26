function booksList(bookPages, pagePerHour, days){
let totalHours = bookPages / pagePerHour;
let hoursPerDay = totalHours / days;
console.log(hoursPerDay);
}
booksList(212, 20, 2);