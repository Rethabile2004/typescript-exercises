"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function updateUser(user, updates) {
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
    return { ...user, ...updates };
}
const myUser = { id: "123", name: "Bethny", email: "b123@gmail.com" };
updateUser(myUser, { name: "Kim" });
//# sourceMappingURL=ex17.js.map