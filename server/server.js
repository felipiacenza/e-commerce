const express = require('express');
const path = require('path');
const { connectDB, sequelize } = require('./db/db');
const Product = require('./models/Product');

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a la base de datos
connectDB();

// Sincronizar modelos con la base de datos
// Nota: force: true en sequelize.sync eliminará y volverá a crear 
// las tablas cada vez que se inicie el servidor. Usa force: false en un entorno de producción.
sequelize.sync({ force: true }).then(() => {
    console.log('Base de datos y modelos sincronizados.');
});



// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, '..')));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
