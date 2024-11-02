import { Ingredient, IPizza, Visitor } from './types';

// Add ingredient operation
export class AddCheeseOperation implements Visitor {
  visit(pizza: IPizza) {
    pizza.ingredients = [...pizza.ingredients, Ingredient.Cheese];
  }
}

export class AddBaconOperation implements Visitor {
  visit(pizza: IPizza) {
    pizza.ingredients = [...pizza.ingredients, Ingredient.Bacon];
  }
}

export class AddPineapplesOperation implements Visitor {
  visit(pizza: IPizza) {
    pizza.ingredients = [...pizza.ingredients, Ingredient.Pineapples];
  }
}

export class AddMushroomsOperation implements Visitor {
  visit(pizza: IPizza) {
    pizza.ingredients = [...pizza.ingredients, Ingredient.Mushrooms];
  }
}

export class AddShrimpOperation implements Visitor {
  visit(pizza: IPizza) {
    pizza.ingredients = [...pizza.ingredients, Ingredient.Shrimp];
  }
}

export class AddSalmonOperation implements Visitor {
  visit(pizza: IPizza) {
    pizza.ingredients = [...pizza.ingredients, Ingredient.Salmon];
  }
}

// bake pizza
export class BakeOperation implements Visitor {
  visit(pizza: IPizza, options = {}): void {
    const ingredients: Ingredient[] = pizza.ingredients;
    const ingredientsObject: Partial<{ [key in Ingredient]: number }> = ingredients
      .reduce((ingredientsCount, ingredient) => ({
        ...ingredientsCount,
        [ingredient]: (ingredientsCount[ingredient] ?? 0) + 1,
      }), {});

    const composition = Object.entries(ingredientsObject)
      .map(([name, count]) => `${count} x ${name}`)
      .join('\n');

    const { pizzaName } = options as { pizzaName: string };
    const title = pizzaName ? `Pizza '${pizzaName}'` : 'Pizza';

    console.info(`${title}\n${composition}`);
  }
}