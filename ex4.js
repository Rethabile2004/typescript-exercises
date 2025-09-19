"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserRole;
(function (UserRole) {
    UserRole[UserRole["Admin"] = 0] = "Admin";
    UserRole[UserRole["Editor"] = 1] = "Editor";
    UserRole[UserRole["Viewer"] = 2] = "Viewer";
})(UserRole || (UserRole = {}));
function canEdit(user) {
    return user.role === UserRole.Admin || user.role === UserRole.Editor;
}
const user1 = { name: 'Jeff', role: UserRole.Admin };
console.log(canEdit(user1));
//# sourceMappingURL=ex4.js.map