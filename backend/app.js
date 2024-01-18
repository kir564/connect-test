const express = require('express');
const mongoose = require('mongoose');
const { getHotels } = require('./controllers/hotel');

const app = express();

// app.use(express.static('../frontend/build'));

const port = 3001;
app.use(express.json());

app.get('/hotels', async (req, res) => {
  const hotels = await getHotels();

  res.send({ data: hotels });
});

mongoose
  .connect(
    'mongodb+srv://k563ke70:YWieZnCkY3QvezYJ@cluster0.pxntl8x.mongodb.net/hotels?retryWrites=true&w=majority'
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`Server started on port ${port}... `);
    });
  });
