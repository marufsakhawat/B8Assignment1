const multiplyValue = (value: number, multiplier?: number) : number => {
  if (multiplier !== undefined) {
    return value * multiplier;
  }
  return value * 2;
};






type ProcessInputValue = string | number | boolean;

const processInput = (value: ProcessInputValue): string | number => {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }
  return value ? "Active" : "Inactive";
};







type FormatCoordinateValue = readonly [number, number, string];

const formatCoordinate = ([
  latitude,
  longitude,
  locationName,
]: FormatCoordinateValue): string => {
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};









const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  const combinedArray: T[] = [];
  for (const array of arrays) {
    combinedArray.push(...array);
  }
  return combinedArray;
};











interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  const popularCourses: Course[] = courses.filter(
    (course: Course): boolean =>
      course.isPublished && course.students >= minStudents,
  );
  return popularCourses;
};


















const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  const extractedValues: T[K][] = items.map((item: T): T[K] => item[key]);
  return extractedValues;
};













class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}












const validateAgeAsync = async (age: number): Promise<string> => {
  if (age < 18) {
    throw new Error("Access Denied: Must be 18 or older");
  }

  const delay: Promise<void> = new  Promise<void>((resolve: () => void): void => {
    setTimeout(resolve, 1000);
  });
  await delay;
  return "Access Granted";
};
