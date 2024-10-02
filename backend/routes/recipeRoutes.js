'use strict';

const express = require('express');
const recipeController = require('../controllers/recipeController');
const router = express.Router();

const { getAllRecipes, getRecipeById, getRecipeInstructionsById } =
  recipeController;

router.get('/recipes', getAllRecipes);
router.get('/recipes/:id', getRecipeById);
router.get('/recipes/:id/instructions', getRecipeInstructionsById);

module.exports = {
  routes: router,
};
