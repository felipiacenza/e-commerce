const express = require('express');
const path = require('path');
const { connectDB, sequelize } = require('./database/db');
const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a la base de datos
connectDB();

// Sincronizar modelos con la base de datos
sequelize.sync({ force: true }).then(() => {
    console.log('Base de datos y modelos sincronizados.');
});

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, '..')));

// Ruta principal
app.get('/', (req, res) => {
    res.render('index', { title: 'ndkfs' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
