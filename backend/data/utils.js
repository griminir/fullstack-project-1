'use strict';

const fs = require('fs-extra');
const { join } = require('path');

const loadSqlQueries = async (foldername) => {
  const filepath = join(process.cwd(), 'data', foldername);
  const files = await fs.readdir(filepath);
  const sqlFiles = await files.filter((f) => f.endsWith('.sql'));
  const queries = {};

  for (const sqlfile of sqlFiles) {
    const query = await fs.readFileSync(join(filepath, sqlfile), {
      encoding: 'utf-8',
    });
    queries[sqlfile.replace('.sql', '')] = query;
  }
  return queries;
};

module.exports = {
  loadSqlQueries,
};