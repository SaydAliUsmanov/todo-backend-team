const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const chalk = require('chalk');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));

app.use(require('./routes'));

const connectAndStartServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_SERVER, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(process.env.PORT, () => {
      console.log(chalk.green(`Успешно соединились. Порт ${process.env.PORT}`));
    });
  } catch (e) {
    console.log(chalk.bgRed.white(`Ошибка при подключении: ${e.toString()}`));
  }
};

connectAndStartServer();
