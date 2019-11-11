const functions = require('firebase-functions');
const generator = require('./generator');

exports.bigben = functions.https.onRequest((req, res) => {
  const hours = (new Date().getHours() % 12) + 1  // London is UTC + 1hr;
  res.status(200).send(`<!doctype html>
    <head>
      <title>Time</title>
    </head>
    <body>
      ${'BONG '.repeat(hours)}
    </body>
  </html>`);
});


exports.generator = functions.https.onRequest((req, res) => {
  res.status(200).send(generator);
});

exports.machine = functions.https.onRequest((req, res) => {
  console.log(req);
  res.status(200).send(generator.generate('machine'));
});

exports.mean = functions.https.onRequest((req, res) => {
  res.status(200).send(generator.generate('mean'));
});

exports.percentage = functions.https.onRequest((req, res) => {
  res.status(200).send(generator.generate('percentage'));
});

exports.price = functions.https.onRequest((req, res) => {
  res.status(200).send(generator.generate('price'));
});

exports.ratio = functions.https.onRequest((req, res) => {
  res.status(200).send(generator.generate('ratio'));
});

exports.salt = functions.https.onRequest((req, res) => {
  res.status(200).send(generator.generate('salt'));
});

exports.speed = functions.https.onRequest((req, res) => {
  res.status(200).send(generator.generate('speed'));
});

exports.time = functions.https.onRequest((req, res) => {
  res.status(200).send(generator.generate('time'));
});

exports.work = functions.https.onRequest((req, res) => {
  res.status(200).send(generator.generate('work'));
});