// Write a JavaScript/TypeScript function that reverses a given string

function reverse(str: string): string {
  return str.split("").reverse().join("");
}

console.log(reverse("hello"));
