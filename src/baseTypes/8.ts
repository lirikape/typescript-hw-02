/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/
type Gender = "male" | "female";

// Створення змінної myGender цього типу
let myGender: Gender;

// Присвоєння значення змінній myGender
myGender = "male"; // Валідне значення

export {};
