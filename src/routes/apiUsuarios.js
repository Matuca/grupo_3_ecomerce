const express = require('express');
const router = express.Router();
const usuariosApiController = require('../controllers/usuariosApiController');

router.get("/", usuariosApiController.lista);
router.get("/:id", usuariosApiController.detalle);

module.exports = router;