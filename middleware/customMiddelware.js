"use strict";

var config = require('../lib/config');

var Cmiddleware = {
  urlDecode: function (req, res, next) {
    var data = {};
    if (req.method == 'POST' && req.body) {
      Object.keys(req.body).forEach(function(key) {
        var val = req.body[key];
        try{
          data[key] = decodeURIComponent(unescape(val));
        } catch(e) {
          data[key] = val;
        }
      });
    } else if(req.query) {
      Object.keys(req.query).forEach(function(key) {
        var val = req.query[key];
        try {
          data[key] = decodeURIComponent(unescape(val));
        } catch(e) {
          data[key] = val;
        }
      });
    }
    req.data = data;
    next();
  },
};

module.exports = Cmiddleware;
/*---------------------------------------------*/
