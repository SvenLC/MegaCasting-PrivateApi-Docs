'use strict';


/**
 *
 * adresseId Long ID de l'adresse recherchée
 * returns Adresse
 **/
exports.adresseAdresseIdGET = function(adresseId) {
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
 * adresseId Long ID de l'adresse recherchée
 * body AdresseWithoutId  (optional)
 * returns Adresse
 **/
exports.adresseAdresseIdPUT = function(adresseId,body) {
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
 * Permet de récupérer toutes les adresses
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
 * Permet d'ajouter une adresse
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

