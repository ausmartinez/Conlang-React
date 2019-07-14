var express = require('express');
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;
var secretRoute = require('./../../_secret');

router.get('/', function(req, res, next) {
  const CONNECTION_URL = secretRoute;
  const DATABASE_NAME = 'drevtam';
  MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        throw error;
    }
    database = client.db(DATABASE_NAME);
    collection = database.collection('dictionary');
    // { "_id": new ObjectId(request.params.id) }
    collection.findOne({ "wow" :  "wow"}, (error, result) => {
      if(error) {
        throw error;
      }
      res.json(result);
    });
  });
});

module.exports = router;
