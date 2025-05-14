//simple example of DI

class Database1 {
  getUser(id: number) {
    return { _id: id, name: "bilal" };
  }
}

class User {
  constructor(private db: Database1) {}
  printUser(id: number) {
    return this.db.getUser(id);
  }
}

const db = new Database1();
const user = new User(db);
console.log(user.printUser(2));
