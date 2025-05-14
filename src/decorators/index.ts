function Logger(constructor: Function) {
  console.log(`Class ${constructor.name} created`);
  const res = 3 + 5;
  console.log(res);
}

@Logger
class AppService {}
