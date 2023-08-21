const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
mongoose.set('strictQuery', true);
const dbConnect = mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected Successfully'))
  .catch((err) => {
    console.log(err);
  });

module.exports = dbConnect;
