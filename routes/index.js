var express = require('express');
var router = express.Router();
const { Barang } = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/barang', async function(req, res, next) {
  try {
    const data = await Barang.findAll();
    res.json({
      status: 'success',
      data: data
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

module.exports = router;