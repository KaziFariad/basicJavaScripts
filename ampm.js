'use strict';

let s = '12:45:54PM';
const result = timeConversion(s);
console.log(result);

function timeConversion(s) {
    let unit = s.slice(-2, -1);
    let hour = s.slice(0, 2);
    let minsSec = s.slice(2, -2);
    let time = s.slice(0, -2);
    if (unit == 'A') {
        if(hour == 12){
            return '00' + minsSec;
        }
        return time
    }
    else if (unit == 'P') {
        let hours = +(hour);
            if(hour == 12){
                return '12' + minsSec;
            }
        hours += 12;
        return hours + minsSec;
    }
    return s
}