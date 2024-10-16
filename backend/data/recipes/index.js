'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getAllRecipes = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries('recipes');
    const list = await pool.request().query(sqlQueries.getAllRecipes);
    return list.recordset;
  } catch (error) {
    return error.message;
  }
};

const getRecipeById = async (id) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries('recipes');
    const oneRecipe = await pool
      .request()
      .input('id', sql.Int, id)
      .query(sqlQueries.getRecipeById);
    return oneRecipe.recordset;
  } catch (error) {
    return error.message;
  }
};

const createRecipe = async (recipeData) => {
  try {
    console.log(recipeData.title);

    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries('recipes');
    const newRecipe = await pool
      .request()
      .input('title', sql.NVarChar, recipeData.title)
      .input('description', sql.NVarChar, recipeData.description)
      .input('picture', sql.NVarChar, recipeData.picture)
      .query(sqlQueries.createRecipe);
    return newRecipe.recordset;
  } catch (error) {
    return error.message;
  }
};

const updateRecipe = async (recipeData) => {
  try {
    let pool = sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries('recipes');
    const updateRecipe = await pool
      .request()
      .input('id', sql.Int, recipeData.id)
      .input('title', sql.NVarChar, recipeData.title)
      .input('description', sql.NVarChar, recipeData.description)
      .input('picture', sql.NVarChar, recipeData.picture)
      .query(sqlQueries.updateRecipe);
    return updateRecipe.recordset;
  } catch (error) {
    return error.message;
  }
};

const getRecipeIngredientsById = async (id) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries('recipes');
    const oneRecipe = await pool
      .request()
      .input('id', sql.Int, id)
      .query(sqlQueries.getRecipeIngredientsById);
    return oneRecipe.recordset;
  } catch (error) {
    return error.message;
  }
};

const createIngredient = async (ingredientData) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries('recipes');

    if (Array.isArray(ingredientData) && ingredientData.length > 1) {
      for (const ingredient of ingredientData) {
        await pool
          .request()
          .input('recipeId', sql.Int, ingredient.recipeId)
          .input('quantity', sql.Float, ingredient.quantity)
          .input('unit', sql.NVarChar, ingredient.unit)
          .input('name', sql.NVarChar, ingredient.name)
          .query(sqlQueries.createIngredient);
      }
      return { message: 'Ingredients inserted successfully' };
    }

    const ingredient = Array.isArray(ingredientData)
      ? ingredientData[0]
      : ingredientData;
    const newIngredient = await pool
      .request()
      .input('recipeId', sql.Int, ingredient.recipeId)
      .input('quantity', sql.Float, ingredient.quantity)
      .input('unit', sql.NVarChar, ingredient.unit)
      .input('name', sql.NVarChar, ingredient.name)
      .query(sqlQueries.createIngredient);
    return newIngredient.recordset;
  } catch (error) {
    return error.message;
  }
};

const updateIngredient = async (ingredientData) => {
  try {
    let pool = sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries('recipes');

    if (Array.isArray(ingredientData) && ingredientData.length > 1) {
      for (const ingredient of ingredientData) {
        await pool
          .request()
          .input('id', sql.Int, ingredient.id)
          .input('quantity', sql.Float, ingredient.quantity)
          .input('unit', sql.NVarChar, ingredient.unit)
          .input('name', sql.NVarChar, ingredient.name)
          .query(sqlQueries.updateIngredient);
      }
      return { message: 'Ingredients updated successfully' };
    }

    const ingredient = Array.isArray(ingredientData)
      ? ingredientData[0]
      : ingredientData;
    const updateIngredient = await pool
      .request()
      .input('id', sql.Int, ingredient.id)
      .input('quantity', sql.Float, ingredient.quantity)
      .input('unit', sql.NVarChar, ingredient.unit)
      .input('name', sql.NVarChar, ingredient.name)
      .query(sqlQueries.updateIngredient);
    return updateIngredient.recordset;
  } catch (error) {
    return error.message;
  }
};

const deleteIngredient = async (id) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries('recipes');
    const deleteIngredient = await pool
      .request()
      .input('id', sql.Int, id)
      .query(sqlQueries.deleteIngredient);
    return deleteIngredient.recordset;
  } catch (error) {
    return error.message;
  }
};

const getRecipeInstructionsById = async (id) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries('recipes');
    const oneRecipe = await pool
      .request()
      .input('id', sql.Int, id)
      .query(sqlQueries.getRecipeInstructionsById);
    return oneRecipe.recordset;
  } catch (error) {
    return error.message;
  }
};

const createInstruction = async (instructionData) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries('recipes');

    if (Array.isArray(instructionData) && instructionData.length > 1) {
      for (const instruction of instructionData) {
        await pool
          .request()
          .input('recipeId', sql.Int, instruction.recipeId)
          .input('step', sql.NChar, instruction.step)
          .query(sqlQueries.createInstruction);
      }
      return { message: 'Instructions inserted successfully' };
    }

    const instruction = Array.isArray(instructionData)
      ? instructionData[0]
      : instructionData;
    const newInstruction = await pool
      .request()
      .input('recipeId', sql.Int, instruction.recipeId)
      .input('step', sql.NChar, instruction.step)
      .query(sqlQueries.createInstruction);
    return newInstruction.recordset;
  } catch (error) {
    return error.message;
  }
};

const updateInstruction = async (instructionData) => {
  try {
    let pool = sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries('recipes');

    if (Array.isArray(instructionData) && instructionData.length > 1) {
      for (const instruction of instructionData) {
        await pool
          .request()
          .input('id', sql.Int, instruction.id)
          .input('step', sql.NChar, instruction.step)
          .query(sqlQueries.updateInstruction);
      }
      return { message: 'Instructions updated successfully' };
    }

    const instruction = Array.isArray(instructionData)
      ? instructionData[0]
      : instructionData;
    const updateInstruction = await pool
      .request()
      .input('id', sql.Int, instruction.id)
      .input('step', sql.NChar, instruction.step)
      .query(sqlQueries.updateInstruction);
    return updateInstruction.recordset;
  } catch (error) {
    return error.message;
  }
};

const deleteInstruction = async (id) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries('recipes');
    const deleteInstruction = await pool
      .request()
      .input('id', sql.Int, id)
      .query(sqlQueries.deleteInstruction);
    return deleteInstruction.recordset;
  } catch (error) {
    return error.message;
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
