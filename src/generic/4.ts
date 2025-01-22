/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

// Інтерфейс для типу пропсів
interface ComponentProps {
  title: string;
}

// Загальний клас Component із використанням Generics
class Component<T> {
  constructor(public props: T) {}
}

// Клас Page, що розширює Component
class Page extends Component<ComponentProps> {
  pageInfo() {
    console.log(this.props.title); // Тепер TypeScript знає, що props містить поле title
  }
}

// Приклад використання
const page = new Page({ title: 'Home Page' });
page.pageInfo(); // Виведе: Home Page

export {};