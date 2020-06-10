const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('LDAW 2020, evidencia Docker (:'));

app.listen(3000, () => {
    console.log('REST API corriendo en puerto 3000!');
})