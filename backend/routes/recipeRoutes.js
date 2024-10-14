'use strict';

const express = require('express');
const recipeController = require('../controllers/recipeController');
const router = express.Router();

const {
  getAllRecipes,
  getRecipeById,
  getRecipeInstructionsById,
  getRecipeIngredientsById,
  createIngredient,
  deleteIngredient,
  createInstruction,
  deleteInstruction,
  createRecipe,
} = recipeController;


router.get('/recipes', getAllRecipes);
router.get('/recipes/:id', getRecipeById);
router.get('/recipes/:id/instructions', getRecipeInstructionsById);
router.get('/recipes/:id/ingredients', getRecipeIngredientsById);
router.post('/recipes', createRecipe);
router.post('/recipes/ingredients', createIngredient);
router.post('/recipes/instructions', createInstruction);
router.delete('/recipes/ingredients/:id', deleteIngredient);
router.delete('/recipes/instructions/:id', deleteInstruction);

module.exports = {
  routes: router,
};
