const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Bienvenidos :D' });
});

router.get('/acercade', (req, res) => {
  res.render('acercade', { title: 'Acerca de: ' });
});
router.get('/framework', (req, res) => {
  res.render('framework', { title: 'framework' });
});

module.exports = router;
