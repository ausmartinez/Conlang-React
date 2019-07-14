const Express = require('express');
const BodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());

// Routes
// localhost:4000/mostRecent
app.use('/mostRecent', require('./routes/mostRecent'));
// localhost:4000/findByWord/:word
app.use('/findByWord', require('./routes/findByWord'));
// localhost:4000/findByDef/:definition
app.use('/findByDef', require('./routes/findByDef'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.json({ ERROR: err });
});

module.exports = app;

const port = 4000;
app.listen(port, () => {});
console.log('App running on port ' + port + '...');
