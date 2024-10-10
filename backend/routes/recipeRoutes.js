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
} = recipeController;

router.get('/recipes', getAllRecipes);
router.get('/recipes/:id', getRecipeById);
router.get('/recipes/:id/instructions', getRecipeInstructionsById);
router.get('/recipes/:id/ingredients', getRecipeIngredientsById);
router.post('/recipes/ingredients', createIngredient);

module.exports = {
  routes: router,
};
