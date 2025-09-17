interface Repository<T>{
    add(item:T):void;
    getAll():T[]
}

class InMemoryRepository<T> implements Repository<T>{
    private items:T[]=[]
    add(item: T): void {
        this.items.push(item)
    }
    getAll(): T[] {
        return this.items
    }
}

type Book={title:string,author:string}

const bookRepo=new InMemoryRepository<Book>();
bookRepo.add({title:'Clean Code',author:'Robert C. Martin'})
console.log(bookRepo.getAll())