'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', recipeRoutes.routes);

app.listen(config.port, () => {
  console.log(`listening on http://localhost:${config.port}...`);
});
