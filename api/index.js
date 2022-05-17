const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const initLoader = require("./tools/initLoader.js");

// Syncing all the models at once.

// Para la precarga cuando se levanta el server, ejecutar la funcion getEpisodes(). Al ser una peticion vamos a usar async await.

conn.sync({ force: true }).then(() => {
//  getEpisodes();
  server.listen(3001, async () => {
    console.log("Listening at 3001");
    await initLoader();
    console.log('Episodios cargados...'); // eslint-disable-line no-console
  });
});
