const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');
require('dotenv').config();

dbConnection();

const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

// ----- Rutas ------

app.use('/api/asisstance', require('./routes/asisstance'));
app.use('/api/employees', require('./routes/employees'));

app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en puerto ${process.env.PORT}`)
})