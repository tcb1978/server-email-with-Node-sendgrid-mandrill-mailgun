const express = require('express');
const router = express.Router();
const sendgrid = require('sendgrid')(process.env.USER, process.env.PASS);
/* GET home page. */
router.get('/', function(req, res, next) {
  sendgrid.send({
    to: process.env.FROM,
    from: process.env.TO,
    text: 'This is an Email through sendgrid'
  }, (err, json) => {
    if (err) {
      return console.error(err);
    }
    console.log(json );
  })
  // res.render('index', { title: 'Express' });
});

module.exports = router;
