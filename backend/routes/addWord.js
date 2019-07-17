const express = require('express');
const MongoClient = require("mongodb").MongoClient;
const secretRoute = require('./../../_secret');
const corsOptions = require('./../corsOptions');
const cors = require('cors');

const router = express.Router();

router.get('/:word&:def&:type&:slang&:origin', cors(corsOptions), function(req, res, next) {
  const CONNECTION_URL = secretRoute;
  const DATABASE_NAME = 'drevtam';
  MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        throw error;
    }
    database = client.db(DATABASE_NAME);
    collection = database.collection('dictionary');
    let inputDate = new Date();
    newWord = {
      word        : req.params['word'],
      definition  : req.params['def'],
      wordType    : req.params['type'],
      isSlang     : req.params['slang'],
      Origin      : req.params['origin'],
      timeUpdated : inputDate,
      dateCreated : inputDate
    }
    collection.insertOne(newWord)
      .then(result => res.json('SUCCESS: Word added'))
      .catch(err => res.json(`Failed to insert item: ${err}`));
  });
});

module.exports = router;
