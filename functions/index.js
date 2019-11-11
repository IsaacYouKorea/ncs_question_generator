const functions = require('firebase-functions');
const problemList = require('./problem-list');
// import problemList from './problem-list/index';

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


exports.problemList = functions.https.onRequest((req, res) => {
  res.status(200).send(problemList);
});

exports.machine = functions.https.onRequest((req, res) => {
  console.log(req);
  res.status(200).send(problemList.generate('machine'));
});

exports.mean = functions.https.onRequest((req, res) => {
  res.status(200).send(problemList.generate('mean'));
});

exports.percentage = functions.https.onRequest((req, res) => {
  res.status(200).send(problemList.generate('percentage'));
});

exports.price = functions.https.onRequest((req, res) => {
  res.status(200).send(problemList.generate('price'));
});

exports.ratio = functions.https.onRequest((req, res) => {
  res.status(200).send(problemList.generate('ratio'));
});

exports.salt = functions.https.onRequest((req, res) => {
  res.status(200).send(problemList.generate('salt'));
});

exports.speed = functions.https.onRequest((req, res) => {
  res.status(200).send(problemList.generate('speed'));
});

exports.time = functions.https.onRequest((req, res) => {
  res.status(200).send(problemList.generate('time'));
});

exports.work = functions.https.onRequest((req, res) => {
  res.status(200).send(problemList.generate('work'));
});