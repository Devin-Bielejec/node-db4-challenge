
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('Steps').insert([
        {id: 1, Recipe_id: 1, Ingredient: "Flour", Quantity: 1},
        {id: 2, Recipe_id: 1, Ingredient: "Water", Quantity: 2},
        {id: 3, Recipe_id: 1, Ingredient: "Yeast", Quantity: 1},
        {id: 4, Recipe_id: 1, Ingredient: "Sugar", Quantity: 3},

        {id: 5, Recipe_id: 2, Ingredient: "Chicken", Quantity: 10},
        {id: 6, Recipe_id: 2, Ingredient: "More meat", Quantity: 20},
        {id: 7, Recipe_id: 2, Ingredient: "Water", Quantity: 10},
        {id: 8, Recipe_id: 2, Ingredient: "Ketchup", Quantity: 30}
      ]);
    });
};
