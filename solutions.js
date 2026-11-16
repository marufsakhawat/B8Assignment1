"use strict";
const multiplyValue = (value, multiplier) => {
    if (multiplier !== undefined) {
        return value * multiplier;
    }
    return value * 2;
};
const processInput = (value) => {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    if (typeof value === "number") {
        return value * 10;
    }
    return value ? "Active" : "Inactive";
};
const formatCoordinate = ([latitude, longitude, locationName,]) => {
    return `Location: ${locationName} (${latitude}, ${longitude})`;
};
const concatenateArrays = (...arrays) => {
    const combinedArray = [];
    for (const array of arrays) {
        combinedArray.push(...array);
    }
    return combinedArray;
};
const getPopularCourses = (courses, minStudents) => {
    const popularCourses = courses.filter((course) => course.isPublished && course.students >= minStudents);
    return popularCourses;
};
const pluckValues = (items, key) => {
    const extractedValues = items.map((item) => item[key]);
    return extractedValues;
};
class Employee {
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
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
const validateAgeAsync = async (age) => {
    if (age < 18) {
        throw new Error("Access Denied: Must be 18 or older");
    }
    const delay = new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
    await delay;
    return "Access Granted";
};
