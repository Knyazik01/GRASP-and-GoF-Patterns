import { AmericanKitchen, JapaneseKitchen, UkrainianKitchen } from './Kitchen';
import { DesertDish, FirstDish, SecondDish, ThirdDish } from './Dish';

const dishes = [
  new AmericanKitchen(new FirstDish()),   // Original Pizza
  new AmericanKitchen(new DesertDish()),  // Sweet Pizza
  new JapaneseKitchen(new FirstDish()),   // Original Roll
  new JapaneseKitchen(new SecondDish()),  // Spicy Roll
  new UkrainianKitchen(new FirstDish()),  // Original Varenyk
  new UkrainianKitchen(new ThirdDish()),  // Vegan Varenyk
];

dishes.forEach(dish => console.info(dish.getName()));