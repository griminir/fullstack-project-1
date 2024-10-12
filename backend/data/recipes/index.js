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

const createIngredient = async (ingredientData) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries('recipes');
    const newIngredient = await pool
      .request()
      .input('recipeId', sql.Int, ingredientData.recipeId)
      .input('quantity', sql.Float, ingredientData.quantity)
      .input('unit', sql.NVarChar, ingredientData.unit)
      .input('name', sql.NVarChar, ingredientData.name)
      .query(sqlQueries.createIngredient);
    return newIngredient.recordset;
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
};
