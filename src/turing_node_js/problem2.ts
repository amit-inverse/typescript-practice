// Write a JavaScript/TypeScript function that reverses a given string
// Using decorator

function p2_split(
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

function p2_reverse(
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

function p2_join(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const [arg] = args;
    const argSplitted = arg.join("");
    originalMethod.apply(this, [argSplitted]);
  };
}

class p2_StringManager {
  @p2_split
  @p2_reverse
  @p2_join
  print(str: string) {
    // SPLIT
    // REVERSE
    // JOIN
    console.log(str);
  }
}

const p2_stringManager = new p2_StringManager();
p2_stringManager.print("hello");
