export const multiplyValue = (value, multiplier) => {
    if (multiplier !== undefined) {
        return value * multiplier;
    }
    return value * 2;
};
export const processInput = (input) => {
    if (typeof input === "string") {
        return input.trim().toLowerCase();
    }
    if (typeof input === "number") {
        return input * 10;
    }
    return input ? "Active" : "Inactive";
};
export const formatCoordinate = ([latitude, longitude, locationName,]) => {
    return `Location: ${locationName} (${latitude}, ${longitude})`;
};
export const concatenateArrays = (...arrays) => {
    const result = [];
    for (const array of arrays) {
        result.push(...array);
    }
    return result;
};
export const getPopularCourses = (courses, minStudents) => {
    return courses.filter((course) => course.isPublished && course.students >= minStudents);
};
export const pluckValues = (items, key) => {
    return items.map((item) => item[key]);
};
export class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
export class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
export const validateAgeAsync = async (age) => {
    if (age < 18) {
        throw new Error("Access Denied: Must be 18 or older");
    }
    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
    return "Access Granted";
};
