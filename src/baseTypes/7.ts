/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
// Enum для днів тижня
enum Weekday {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

// Функція, яка перевіряє, чи день є вихідним
function isWeekend(day: Weekday): boolean {
  return day === Weekday.Saturday || day === Weekday.Sunday;
}

// Приклади використання
console.log(isWeekend(Weekday.Monday)); // false (робочий день)
console.log(isWeekend(Weekday.Saturday)); // true (вихідний день)
console.log(isWeekend(Weekday.Sunday)); // true (вихідний день)
