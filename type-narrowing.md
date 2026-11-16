# Type Narrowing in TypeScript: Making Union Types Safer

## Introduction

Type narrowing is the process of checking a value and reducing its possible types before using it. It is especially helpful when a function accepts a union type, because TypeScript cannot assume which member of that union it has received. Narrowing lets us write safer code without using `any` or guessing the value's shape.

## Detailed Explanation

The `typeof` operator is useful for JavaScript primitive types such as strings and numbers. After the check, TypeScript understands which operation is safe.

```ts
function formatValue(value: string | number): string {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  }
  return value.toFixed(2);
}
```

For class instances, we can use `instanceof`. It checks whether an object comes from a particular class.

```ts
class Dog {
  bark() { return "Woof!"; }
}

function speak(pet: Dog | Date): string {
  if (pet instanceof Dog) {
    return pet.bark();
  }
  return pet.toDateString();
}
```

The `in` operator checks whether a property exists on an object. It is handy when two object types have different fields.

```ts
type Admin = { name: string; permissions: string[] };
type Guest = { name: string; visitCode: string };

function describe(user: Admin | Guest): string {
  if ("permissions" in user) {
    return `Admin: ${user.permissions.length} permissions`;
  }
  return `Guest code: ${user.visitCode}`;
}
```

These checks help the compiler understand the value's type, so the code don't need unsafe type assertions.

## Conclusion

`typeof`, `instanceof`, and `in` are simple but practical narrowing tools. Use the check that matches the value: primitive, class instance, or object property. With regular practice, type narrowing makes TypeScript code more predictable and easier to debug, even when the input is not known in advance.
