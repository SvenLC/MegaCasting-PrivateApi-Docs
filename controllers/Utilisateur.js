'use strict';

var utils = require('../utils/writer.js');
var Utilisateur = require('../service/UtilisateurService');

module.exports.authLoginPOST = function authLoginPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Utilisateur.authLoginPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authSignupPOST = function authSignupPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Utilisateur.authSignupPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
