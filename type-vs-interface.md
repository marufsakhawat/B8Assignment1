# Type Alias vs Interface in TypeScript: What Is the Difference?

## Introduction

TypeScript gives us two main ways to describe the shape of data: `type` aliases and `interface`. At first they can look almost the same, which can make beginners wonder why both exist. In daily projects, either one can make code easier to read and maintain. The important thing is knowing what each one can do and choosing the option that fits the situation.

## Detailed Explanation

An `interface` is commonly used to describe the structure of an object. It can also be extended by another interface, and declarations with the same name can be merged. This is useful when a project has shared object contracts that may grow over time.

```ts
interface User {
  name: string;
  age: number;
}

interface Admin extends User {
  permissions: string[];
}
```

A `type` alias can describe an object too, but it can also represent unions, intersections, primitive types, and tuples. For example:

```ts
type Status = "pending" | "approved" | "rejected";
type UserWithStatus = User & { status: Status };
```

Here, the union limits the allowed status values, while the intersection combines two object shapes. This flexibility is a major reason developers use type aliases. One small point: an interface can be extended, but a type alias is often more convienient for combining different kinds of types.

## Conclusion

I usually choose `interface` for clear object structures, especially public contracts that may be extended. I choose `type` when I need unions, tuples, or more complex type composition. There is no universal winner; consistency across a codebase matters more than personal preference.
