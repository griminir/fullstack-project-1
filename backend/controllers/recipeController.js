'use strict';

const recipeData = require('../data/recipes');

const getAllRecipes = async (req, res, next) => {
  try {
    const recipes = await recipeData.getAllRecipes();
    res.send(recipes);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getRecipeById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const oneRecipe = await recipeData.getRecipeById(id);
    if (oneRecipe.length === 0) {
      res.status(400).send('there is no recipe with that Id');
    }
    res.send(oneRecipe);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getRecipeInstructionsById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const oneRecipe = await recipeData.getRecipeInstructionsById(id);

    if (oneRecipe.length === 0) {
      res.status(400).send('there is no recipe with that Id');
    }
    res.send(oneRecipe);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getRecipeIngredientsById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const oneRecipe = await recipeData.getRecipeIngredientsById(id);

    if (oneRecipe.length === 0) {
      res.status(400).send('there is no recipe with that Id');
    }
    res.send(oneRecipe);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const createIngredient = async (req, res, next) => {
  try {
    const ingredientData = req.body;
    const newIngredient = await recipeData.createIngredient(ingredientData);
    res.send(newIngredient);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getAllRecipes,
  getRecipeById,
  getRecipeInstructionsById,
  getRecipeIngredientsById,
  createIngredient,
};
