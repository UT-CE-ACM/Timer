var express = require('express');
var router = express.Router();

data = {
  reminderStamp: [0],
  timePlus: [0]
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET settings page. */
router.get('/settings', function(req, res, next) {
  res.render('settings', { title: 'Express' });
});

/* setTime */
router.post('/setTimer', function(req, res, next) {
  console.log(`set timer to ${parseInt(req.body.time)}`);
  data.reminderStamp.push( parseInt(req.body.time) )
  res.render('settings', { title: 'Express' });
});

/* addTime */
router.post('/addTime', function(req, res, next) {
  console.log(`${parseInt(req.body.time)} added!`);
  data.timePlus.push( parseInt(req.body.time) )
  res.render('settings', { title: 'Express' });
});



/* getTime */
router.post('/getData', function(req, res, next) {
  console.log("getTime!");
  res.status(200).json(data);
});

module.exports = router;
