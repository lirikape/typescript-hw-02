/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/



type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

// Використання Pick та Generics
function compare<T extends keyof AllType, U extends keyof AllType>(
  top: Pick<AllType, "name" | "color">,
  bottom: Pick<AllType, "position" | "weight">
): AllType {
  return {
    name: top.name, 
    color: top.color,
    position: bottom.position,
    weight: bottom.weight, 
  };
}

// Приклад використання
const topObject = { name: 'Top', color: 'Red' };
const bottomObject = { position: 10, weight: 20 };

const result = compare(topObject, bottomObject);

console.log(result); // { name: 'Top', color: 'Red', position: 10, weight: 20 }

export {};
