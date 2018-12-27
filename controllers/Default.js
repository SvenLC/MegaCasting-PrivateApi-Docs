'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.adresse14PUT = function adresse14PUT (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.adresse14PUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adresse1GET = function adresse1GET (req, res, next) {
  Default.adresse1GET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adresseGET = function adresseGET (req, res, next) {
  Default.adresseGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adressePOST = function adressePOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.adressePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authLoginPOST = function authLoginPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.authLoginPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authSignupPOST = function authSignupPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.authSignupPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
