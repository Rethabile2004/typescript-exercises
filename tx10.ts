interface Car{
    model:string;
    year:number;
    elastic:boolean
}

const car:Car={model:"BMW",year:2004,elastic:false};

const displayCarInfor=()=>{
    console.log(`This is a ${car.model} made in ${car.year} - Elastic: ${car.elastic}`)
}