/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

// Функція merge із використанням generics
function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

// Приклад використання
const obj1 = { name: 'Alice' };
const obj2 = { age: 25 };

const merged = merge(obj1, obj2);

console.log(merged); // { name: 'Alice', age: 25 }

// Тип автоматично виведений TypeScript
// merged має тип: { name: string; age: number }

export {};