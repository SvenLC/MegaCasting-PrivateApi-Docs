'use strict';

var utils = require('../utils/writer.js');
var Adresse = require('../service/AdresseService');

module.exports.adresseAdresseIdGET = function adresseAdresseIdGET (req, res, next) {
  var adresseId = req.swagger.params['adresseId'].value;
  Adresse.adresseAdresseIdGET(adresseId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adresseAdresseIdPUT = function adresseAdresseIdPUT (req, res, next) {
  var adresseId = req.swagger.params['adresseId'].value;
  var body = req.swagger.params['body'].value;
  Adresse.adresseAdresseIdPUT(adresseId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adresseGET = function adresseGET (req, res, next) {
  Adresse.adresseGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.adressePOST = function adressePOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Adresse.adressePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
