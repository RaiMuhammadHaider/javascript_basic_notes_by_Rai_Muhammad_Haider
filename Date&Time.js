let toDay = new Date //This is the way in which a date is define
console.log(toDay);//it tells date day and time
console.log(toDay.getDate()); // only date by date 
console.log(toDay.getFullYear()); // only year
console.log(toDay.getHours()); // only hours
console.log(toDay.getMilliseconds()); //only milli seconds
console.log(toDay.getMinutes());//only Minuts
console.log(toDay.getMonth());//only Month in Number
console.log(toDay.getSeconds());//only seconds
console.log(toDay.getTime());//time by 1970 in Milli Seconds
console.log(toDay.getUTCDate());//date
console.log(toDay.getUTCDay());// number of day name 
console.log(toDay.toTimeString());// omly time
console.log(toDay.toJSON( ));//first year Month day 
console.log(toDay.toLocaleDateString()); //simple date
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let dateTo = new Date(2024,8,20,13,36,10) //the month will start from 0 to 11
console.log(dateTo.toDateString());//only for date
console.log(dateTo.toLocaleString());//for date and time

// console.log(SimpleDay.getTimezoneOffset());






