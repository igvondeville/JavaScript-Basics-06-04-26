function cinema(type, rows, columns){
let ticketType = type;
let rowsNum = rows;
let columnsNum =columns;
let income = 0;

if (ticketType === 'Premiere'){
    income = rowsNum * columnsNum * 12.0;
} else if (type === 'Normal'){
    income = rowsNum * columnsNum * 7.50;
} else if (ticketType === 'Discount'){
    income = rowsNum * columnsNum * 5.00;
}
console.log(`${income.toFixed(2)} leva`)
}
cinema("Premiere", 10, 12);