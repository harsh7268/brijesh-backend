const router = require('express').Router();
const Stock = require('../models/Stock');

// CREATE EVENTS
router.post('/', async (req, resp) => {
console.log(req.body);
  //resp.status(200).json(req.body);
  const newStock = new Stock(req.body);
  try {
    const saveStock = await newStock.save();
    resp.status(200).json(saveStock);
  } catch (err) {
    resp.status(500).json(err);
  }
});

// UPDATE EVENTS
router.put('/:id', async (req, resp) => {
  try {
    const stock = await Stock.findById(req.params.id);
    if (stock) {
      try {
        const updateStock = await Stock.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body
          },
          { new: true }
        );
        resp.status(200).json(updateStock);
      } catch (err) {
        resp.status(500).json(err);
      }
    } else {
      resp.status(401).json('You can update only your stock');
    }
  } catch (err) {
    resp.status(500).json(err);
  }
});

// DELETE EVENTS
router.delete('/:id', async (req, resp) => {
  try {
    const stock = await Stock.findById(req.params.id);
    // eslint-disable-next-line no-constant-condition
    if (true) {
      try {
        await stock.delete();
        resp.status(200).json('Stock got delted');
      } catch (err) {
        resp.status(500).json(err);
      }
    } else {
      resp.status(401).json('You can delete only your event');
    }
  } catch (err) {
    resp.status(500).json(err);
  }
});

// GET PARTICULAR EVENTS

router.get('/:id', async (req, resp) => {
  try {
    const stock = await Stock.findById(req.params.id);
    resp.status(200).json(stock);
  } catch (err) {
    resp.status(500).json(err);
  }
});

// GET ALL EVENTS LIST

router.get('/', async (req, resp) => {
  // const username = 'test';
  // const category = 'cat';
  try {
    const stocks = await Stock.find();
    console.log(stocks);
    /* if (username) {
      stocks = await Stock.find({});
    } else if (category) {
      stocks = await Stock.find({
        categories: {
          $in: [category]
        }
      });
    } else {
      stocks = await Stock.find();
    } */
    resp.status(200).json(stocks);
  } catch (err) {
    resp.status(500).json(err);
  }
});

module.exports = router;
