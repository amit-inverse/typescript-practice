// Write a JavaScript/TypeScript function that reverses a given string

function p1_reverse(str: string): string {
  return str.split("").reverse().join("");
}

console.log(p1_reverse("hello"));
