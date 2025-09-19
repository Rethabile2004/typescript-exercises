interface User{
    id:string;
    email:string;
    name:string
}

function updateUser(user:User,updates:Partial<User>):User{
    // if('email' in updates){
    //    user.email=updates?.email; 
    // }
    // if('name' in updates){
    //     user.name=updates?.name;
    // }
    // if('id' in updates){
    //     user.id=updates?.id;
    // }

    // return user
    return {...user,...updates}
}

const myUser:User={id:"123",name:"Bethny",email:"b123@gmail.com"};

updateUser(myUser,{name:"Kim"});