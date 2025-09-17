type Employee={id:string,department:string};
type Manager={teamSize:number};
type ManagerEployee=Employee&Manager;

const gun:ManagerEployee={
    id:'123',
    department:'IT',
    teamSize:8
}

function printManagerInfor(manager:ManagerEployee){
    console.log(`${manager.id} manages ${manager.teamSize} people in ${manager.department}`)
}
printManagerInfor(gun);