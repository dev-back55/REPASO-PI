const router = require('express').Router();
const characters = require('./characters');
const episodes = require('./episodes');

// Configurar los routers

router.use('/characters', characters);
router.use('/episodes', episodes);

module.exports = router;