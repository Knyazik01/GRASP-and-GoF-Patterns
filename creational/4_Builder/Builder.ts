import Pizza from './Pizza';

export default class PizzaBuilder {
  private pizza: Pizza;

  constructor() {
    this.pizza = new Pizza();
  }

  addCheese(count = 1): PizzaBuilder {
    this.pizza.addIngredient('Cheese', count);
    return this;
  }
  addBacon(count = 1): PizzaBuilder {
    this.pizza.addIngredient('Bacon', count);
    return this;
  }
  addPineapples(count = 1): PizzaBuilder {
    this.pizza.addIngredient('Pineapples', count);
    return this;
  }
  addMushrooms(count = 1): PizzaBuilder {
    this.pizza.addIngredient('Mushrooms', count);
    return this;
  }
  addShrimp(count = 1): PizzaBuilder {
    this.pizza.addIngredient('Shrimp', count);
    return this;
  }
  addSalmon(count = 1): PizzaBuilder {
    this.pizza.addIngredient('Salmon', count);
    return this;
  }

  bake(pizzaName: string) {
    const result = this.pizza;
    // reset `pizza` field to allow use same builder several times
    this.pizza = new Pizza();
    return result.getDescription(pizzaName);
  }
}