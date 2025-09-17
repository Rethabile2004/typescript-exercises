enum UserRole{
    Admin,Editor,Viewer
}

type User={
    name:string;
    role:UserRole
}

function canEdit(user:User):boolean{
    return user.role===UserRole.Admin||user.role===UserRole.Editor
}

const user1:User={name:'Jeff',role:UserRole.Admin}
console.log(canEdit(user1));