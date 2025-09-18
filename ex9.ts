function calculateArea(width:number,height?:number):number{
    return width*(height??width);
}

console.log(calculateArea(19));