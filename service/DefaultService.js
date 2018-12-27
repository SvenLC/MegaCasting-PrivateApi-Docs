'use strict';


/**
 *
 * body AdresseWithoutId  (optional)
 * returns Adresse
 **/
exports.adresse14PUT = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ADR_ID" : 0,
  "ADR_NUM_VOIE" : "ADR_NUM_VOIE",
  "ADR_LIBELLE_RUE" : "ADR_LIBELLE_RUE",
  "ADR_VILLE" : "ADR_VILLE"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * returns Adresse
 **/
exports.adresse1GET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ADR_ID" : 0,
  "ADR_NUM_VOIE" : "ADR_NUM_VOIE",
  "ADR_LIBELLE_RUE" : "ADR_LIBELLE_RUE",
  "ADR_VILLE" : "ADR_VILLE"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * returns Adresses
 **/
exports.adresseGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "adresse" : [ {
    "ADR_ID" : 0,
    "ADR_NUM_VOIE" : "ADR_NUM_VOIE",
    "ADR_LIBELLE_RUE" : "ADR_LIBELLE_RUE",
    "ADR_VILLE" : "ADR_VILLE"
  }, {
    "ADR_ID" : 0,
    "ADR_NUM_VOIE" : "ADR_NUM_VOIE",
    "ADR_LIBELLE_RUE" : "ADR_LIBELLE_RUE",
    "ADR_VILLE" : "ADR_VILLE"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * body AdresseWithoutId  (optional)
 * returns Adresse
 **/
exports.adressePOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ADR_ID" : 0,
  "ADR_NUM_VOIE" : "ADR_NUM_VOIE",
  "ADR_LIBELLE_RUE" : "ADR_LIBELLE_RUE",
  "ADR_VILLE" : "ADR_VILLE"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * body User  (optional)
 * returns LoginReturn
 **/
exports.authLoginPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "userId" : "userId",
  "token" : "token"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * body User  (optional)
 * returns SignupReturn
 **/
exports.authSignupPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0,
  "message" : "message",
  "login" : "login",
  "nom" : "nom",
  "prenom" : "prenom"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

