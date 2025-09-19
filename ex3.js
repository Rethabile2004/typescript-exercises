"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InMemoryRepository {
    items = [];
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
}
const bookRepo = new InMemoryRepository();
bookRepo.add({ title: 'Clean Code', author: 'Robert C. Martin' });
console.log(bookRepo.getAll());
//# sourceMappingURL=ex3.js.map