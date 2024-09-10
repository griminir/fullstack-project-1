'use strict';

const express = require('express');
const recipeController = require('../controllers/recipeController');
const router = express.Router();

const { getAllRecipes, getRecipeById, getRecipeInstructionsById } =
  recipeController;

router.get('/recipes', getAllRecipes);
router.get('/recipe/:id', getRecipeById);
router.get('/recipe/instructions/:id', getRecipeInstructionsById);

module.exports = {
  routes: router,
};
