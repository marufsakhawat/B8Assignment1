# Problem Solving with TypeScript & OOP

Hi! This is my submission for the TypeScript & OOP problem-solving project. Everything is written in a single `solutions.ts` file, with every function and method explicitly typed and no `any` anywhere.

## What's inside
- `solutions.ts`: solutions to all 8 problems
- [type-vs-interface.md](./type-vs-interface.md): blog on type aliases vs interfaces
- [type-narrowing.md](./type-narrowing.md): blog on type narrowing with `typeof`, `instanceof`, and `in`

## How I solved each problem
1. **multiplyValue**: The multiplier is optional, and I check `multiplier !== undefined` instead of using a truthy check. That way `0` is treated as a real value and returns `0`, while a missing multiplier falls back to `2`.
2. **processInput**: The parameter is a `string | number | boolean` union, and `typeof` narrows it in each branch: strings are trimmed and lowercased, numbers are multiplied by 10, and booleans become `"Active"` or `"Inactive"`.
3. **formatCoordinate**: The parameter is a `readonly [number, number, string]` tuple, so it can't be changed inside the function. I destructure it and build the string with a template literal, so the numbers are never rounded.
4. **concatenateArrays**: A generic `<T>` with rest parameters (`...arrays: T[][]`). I loop through the arrays and push their items into a new array, which keeps the original order and works with any compiler target.
5. **getPopularCourses**: I defined the `Course` interface and used `filter` with `isPublished && students >= minStudents`. Since `filter` returns a new array, the original is never mutated.
6. **pluckValues**: Uses `<T, K extends keyof T>`, so TypeScript only accepts real property names and returns the correct type (`T[K][]`) using `map`.
7. **Employee and Manager**: `Employee` has a `protected name` and a `private baseSalary`. `Manager` extends it, adds a `private department`, and calls `super(name, baseSalary)`. It can use `name` because it's protected, but only `Employee` can read the salary.
8. **validateAgeAsync**: An `async` function returning `Promise<string>`. If the age is under 18, it throws an `Error`, which rejects right away. Otherwise it waits one second with `setTimeout` wrapped in a promise, then returns `"Access Granted"`.

## How to run
```bash
npm install -g typescript
tsc --strict solutions.ts
```

I also tested all the sample inputs, plus a few edge cases like `0` as a multiplier, empty arrays, and a course with exactly the minimum number of students. All outputs match the samples exactly.
