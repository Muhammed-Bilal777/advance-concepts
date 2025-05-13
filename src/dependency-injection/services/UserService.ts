// src/services/UserService.ts
import { injectable } from "tsyringe";
import { DatabaseService } from "./DatabaseService";

@injectable()
export class UserService {
  constructor(private db: DatabaseService) {}

  public printUser() {
    return this.db.getUser();
  }
}
