// src/index.ts
import "reflect-metadata";
import { container } from "tsyringe";
import { UserService } from "./UserService";

const userService = container.resolve(UserService);
console.log(userService.printUser());
