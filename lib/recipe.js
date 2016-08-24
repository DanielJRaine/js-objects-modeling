'use strict';

let recipe = {
 name : 'Pasta',
 author : 'Jen',
 listOfSteps : ['boil water', 'add salt', 'add pasta', 'cook for 10 minutes',
 'drain water','serve'],
 ingredients : {
    pasta : {
      unitOfMeasure: 'box',
      quantity: 1,
      ingredientAvailability: true,
      notes: 'add all at once'
    },
    salt : {
      unitOfMeasure: 'pinch',
      quantity: 1,
      ingredientAvailability: true,
      notes: 'no notes'
    },
    water : {
      unitOfMeasure: 'cups',
      quantity: 2,
      ingredientAvailability: true,
      notes: 'no notes'
    }

  },

 getRecipe : function() {
    for (let key in recipe['ingredients']) {
      console.log(recipe['ingredients'][key]['quantity'] + " " + recipe['ingredients'][key]['unitOfMeasure'] + " of " + key);
    }
  }

};

recipe.getRecipe('Pasta');
