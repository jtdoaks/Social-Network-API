const express = require('express');
const db = require('./config/connection');
const { MongoClient } = require('mongodb');
// const routes = require('./routes');

const connectionStringURI = `mongodb://127.0.0.1:27017`;

const client = new MongoClient(connectionStringURI);

// let db;

const dbName = 'socialDB';

const app = express();
const port = 3001;
// const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(routes);

const { User, Email, Thoughts, Reaction } = require('./models');


client.connect()
  .then(() => {
    console.log('Connected successfully to MongoDB');
    
    db = client.db(dbName);

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Mongo connection error: ', err.message);
  });