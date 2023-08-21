const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema(
  {
    stock_id: {
      type: String,
      required: false
    },
    date: {
      type: Date,
      required: false
    },
    time: {
      type: String,
      required: false
    },
    source: {
      type: String,
      required: false
    },
    stock_symbol: {
      type: String,
      required: false
    },
    recommendation: {
      type: String,
      required: false
    },
    price_today: {
      type: String,
      required: false
    },
    price_target: {
      type: String,
      required: false
    },
    price_after_earning: {
      type: String,
      required: false
    },
    news: {
      type: String,
      required: false
    },
    technical_indicator: {
      type: String,
      required: false
    },
    descriptions: {
      type: String,
      required: false
    },
    comments: {
      type: String,
      required: false
    },
    ranking: {
      type: String,
      required: false
    },
    earning_reports_source: {
      type: String,
      required: false
    },
    before_open_close: {
      type: String,
      required: false
    },
    est_eps: {
      type: String,
      required: false
    },
    a_eps: {
      type: String,
      required: false
    },
    est_rev: {
      type: String,
      required: false
    },
    a_rev: {
      type: String,
      required: false
    },
    exp_revenue_growth_per: {
      type: Number,
      required: false
    },
    a_rg_per: {
      type: Number,
      required: false
    }, 
    max_surprise_per: {
      type: String,
      required: false
    },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Stock', StockSchema);
