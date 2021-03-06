const express = require('express');
const server = express();

server.all('/', (req, res) => {
  res.send(` `)
});

function keepAlive() {
  server.listen(3000, () => { console.log("¡Servidor listo!" + Date.now()) });
}

module.exports = keepAlive;