// src/services/DatabaseService.ts
import { injectable } from "tsyringe";

@injectable()
export class DatabaseService {
  getUser() {
    return { name: "Bilal", age: 13 };
  }
}
