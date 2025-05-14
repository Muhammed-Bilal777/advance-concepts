🔍 Real Definition
A decorator is a function that is called on:

a class,

a method,

a property,

a parameter

…to modify or extend how it behaves.

🧠 Think of Decorators Like This:
Imagine if you could "decorate" a class or function with special powers.

@makeAwesome
class MyClass {}

Here, @makeAwesome is a decorator that adds behavior to MyClass.

✅ Decorators in TypeScript Are Used For:
Type Use
@injectable() Mark a class as injectable (used by DI frameworks like tsyringe or inversify)
@inject() Specify which dependency to inject
@Controller() Used in frameworks like NestJS to define HTTP controllers
@Get(), @Post() To define routes in NestJS or similar
