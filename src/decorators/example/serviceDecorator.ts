export function UserDecorator(
  target: any,
  proprtyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any) {
    console.log(`calling ${proprtyKey}  with`, args);
    return originalMethod.apply(this, args);
  };
}
