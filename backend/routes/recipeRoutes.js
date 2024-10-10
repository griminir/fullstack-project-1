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
} = recipeController;

router.get('/recipes', getAllRecipes);
router.get('/recipes/:id', getRecipeById);
router.get('/recipes/:id/instructions', getRecipeInstructionsById);
router.get('/recipes/:id/ingredients', getRecipeIngredientsById);
router.post('/recipes/ingredients', createIngredient);
router.delete('/recipes/ingredients/:id', deleteIngredient);

module.exports = {
  routes: router,
};
