const functions = require('firebase-functions');
const generator = require('./generator');
const categories = require('./categories');


exports.generator = functions.https.onRequest((req, res) => {
  res.status(200).send(generator);
});

exports.machine = functions.https.onRequest((req, res) => {
  res.status(200).send(generator.generate('machine'));
});

exports.mean = functions.https.onRequest((req, res) => {
  res.status(200).send(generator.generate('mean'));
});

exports.percentage = functions.https.onRequest((req, res) => {
  res.status(200).send(generator.generate('percentage'));
});

exports.age = functions.https.onRequest((req, res) => {
  res.status(200).send(generator.generate('age'));
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

exports.categories = functions.https.onRequest((req, res) => {
  res.status(200).send(categories);
});

exports.random = functions.https.onRequest((req, res) => {
  res.status(200).send(generator.generate('random'));
});