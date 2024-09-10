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

module.exports = {
  getAllRecipes,
  getRecipeById,
  getRecipeInstructionsById,
};
