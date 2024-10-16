'use strict';

const recipeData = require('../data/recipes');

// recipes
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

const createRecipe = async (req, res, next) => {
  try {
    const newRecipeData = req.body;
    const newRecipe = await recipeData.createRecipe(newRecipeData);
    res.send(newRecipe);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateRecipe = async (req, res, next) => {
  try {
    const data = req.body;
    const updated = await recipeData.updateRecipe(data);
    res.send(updated);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// ingredients
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

const updateIngredient = async (req, res, next) => {
  try {
    const data = req.body;
    const updated = await recipeData.updateIngredient(data);
    res.send(updated);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteIngredient = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedIngredient = await recipeData.deleteIngredient(id);
    res.send(deletedIngredient);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// instructions
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

const createInstruction = async (req, res, next) => {
  try {
    const instructionData = req.body;
    const newInstruction = await recipeData.createInstruction(instructionData);
    res.send(newInstruction);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateInstruction = async (req, res, next) => {
  try {
    const data = req.body;
    const updated = await recipeData.updateInstruction(data);
    res.send(updated);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteInstruction = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedInstruction = await recipeData.deleteInstruction(id);
    res.send(deletedInstruction);
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
  deleteIngredient,
  createInstruction,
  deleteInstruction,
  createRecipe,
  updateRecipe,
  updateIngredient,
  updateInstruction,
};
