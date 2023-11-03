const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  let query = req.query;
  console.log(`rows ${query.rows}`);
  console.log(`cols ${query.cols}`);
  res.render('board', { title: 'Board Display', query });
});

router.get('/gridbuild', (req, res) => {
  let query = req.query;
  let rows = Number(query.rows);
  let cols = Number(query.cols);

  if (!Number.isInteger(rows) || !Number.isInteger(cols)) {
    res.send('Both rows and collumns are Integers.');
  }
  else if (rows < 1 || rows > 10) {
    res.send('Rows are between 1 and 10.');
  } else if (cols < 1 || rows > 10) {
    res.send('Collumns are between 1 and 10.');
  } else {
    res.render('board', {title: 'Board Display', query, rows, cols });
  }
});

module.exports = router;
