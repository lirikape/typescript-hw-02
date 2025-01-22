/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

// Інтерфейс KeyValuePair із використанням generics
interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

// Приклади використання

// Пара ключ-значення з ключем типу string і значенням типу number
const stringNumberPair: KeyValuePair<string, number> = {
  key: 'age',
  value: 25,
};

// Пара ключ-значення з ключем типу number і значенням типу string
const numberStringPair: KeyValuePair<number, string> = {
  key: 1,
  value: 'one',
};

// Пара ключ-значення з довільними типами
const customPair: KeyValuePair<boolean, { name: string }> = {
  key: true,
  value: { name: 'Alice' },
};

console.log(stringNumberPair); // { key: 'age', value: 25 }
console.log(numberStringPair); // { key: 1, value: 'one' }
console.log(customPair); // { key: true, value: { name: 'Alice' } }

export {};