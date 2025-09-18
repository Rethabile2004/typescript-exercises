type Point={
    x:number,
    y:number
}

function calculateDistance(p1:Point,p2:Point):number{
    const dx=p2.x-p1.y;
    const dy=p2.y-p1.x;
    return Math.sqrt(dx*dx+dy*dy);
}

const point1={x:12,y:19};
const point2={x:6,y:23};

console.log(calculateDistance(point1,point2))
console.log(calculateDistance({x:18,y:2},{x:21,y:43}))