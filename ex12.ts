enum Day{
    Monday=1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function checkIfItsSaturdayOrSunday(value:Day):boolean{
    return value===Day.Saturday||value===Day.Sunday;
}

console.log(checkIfItsSaturdayOrSunday(Day.Sunday));