const express = require('express');
const MongoClient = require("mongodb").MongoClient;
const secretRoute = require('./../../_secret');
const corsOptions = require('./../corsOptions');
const cors = require('cors');

const router = express.Router();

router.get('/:word', cors(corsOptions), function(req, res, next) {
// router.get('/:word', function(req, res, next) {
  const CONNECTION_URL = secretRoute;
  const DATABASE_NAME = 'drevtam';
  MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        throw error;
    }
    database = client.db(DATABASE_NAME);
    collection = database.collection('dictionary');
    collection.find({word:req.params['word']}).toArray((error, result) => {
      if(error) {
        throw error;
      }
      res.json(result);
    });
  });
});

module.exports = router;
