//basic example

function Logger(constructor: Function) {
  console.log(`${constructor.name}`);
}

@Logger
class MyClass {}
