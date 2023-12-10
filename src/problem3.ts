// Write a JavaScript/TypeScript function that reverses a given string... join the reversed characters with an underscore.
// Using decorator

function p3_split(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    // args[0] = args[0].split("");
    // originalMethod.apply(this, args);
    const [arg] = args;
    const argSplitted = arg.split("");
    originalMethod.apply(this, [argSplitted]);
  };
}

function p3_reverse(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const [arg] = args;
    const argSplitted = arg.reverse();
    originalMethod.apply(this, [argSplitted]);
  };
}

function p3_join(char: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const [arg] = args;
      const argSplitted = arg.join(char);
      originalMethod.apply(this, [argSplitted]);
    };
  };
}

class p3_StringManager {
  @p3_split
  @p3_reverse
  @p3_join("_")
  print(str: string) {
    // SPLIT
    // REVERSE
    // JOIN
    console.log(str);
  }
}

const p3_stringManager = new p3_StringManager();
stringManager.print("hello");
