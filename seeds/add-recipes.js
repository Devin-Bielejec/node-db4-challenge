
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('Recipes').insert([
        { id: 1, Name: 'Chicken Pasta'},
        { id: 2, Name: 'Bread'}
      ]);
    });
};
