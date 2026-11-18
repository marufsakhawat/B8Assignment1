export const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier !== undefined) {
    return value * multiplier;
  }

  return value * 2;
};










export const processInput = (
  input: string | number | boolean,
): string | number => {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  }

  if (typeof input === "number") {
    return input * 10;
  }

  return input ? "Active" : "Inactive";
};










export const formatCoordinate = ([
  latitude,
  longitude,
  locationName,
]: readonly [number, number, string]): string => {
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};










export const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  const result: T[] = [];

  for (const array of arrays) {
    result.push(...array);
  }

  return result;
};










export interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

export const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  return courses.filter(
    (course: Course): boolean =>
      course.isPublished && course.students >= minStudents,
  );
};










export const pluckValues = <T, K extends keyof T>(
  items: T[],
  key: K,
): T[K][] => {
  return items.map((item: T): T[K] => item[key]);
};










export class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

export class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}










export const validateAgeAsync = async (age: number): Promise<string> => {
  if (age < 18) {
    throw new Error("Access Denied: Must be 18 or older");
  }

  await new Promise<void>((resolve: () => void): void => {
    setTimeout(resolve, 1000);
  });

  return "Access Granted";
};