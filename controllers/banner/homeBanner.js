"use strict";

var fs = require('fs');
var config = require('../../lib/config');
// var errHelper=require('../../lib/helpers/errHelper');
var jsonHandler=require('../../lib/responseHandler');
var util=require('util');
var bannerUpload = function(req, res) {
    var files = req.files;
    if (files && files.image && files.image.path) {
        fs.readFile(files.image.path, function(err, data) {
            if (err || !data) {
                util.log("[ERR] File upload "+err);
                res.json(jsonHelper.response(400, 'Empty File Content', []));
            } else {

                var banner_prefix = config.banner_dir+"/home_banner-";
                banner_prefix+=new Date().getTime();
                banner_prefix+='.png'
                fs.writeFile(banner_prefix,data,function (err,response) {
                    if(err) {
                        errHelper.warn('ERROR in uploading image');
                        errHelper.log('ERROR in uploading image');
                        res.json(jsonHandler.response(400, 'ERROR in uploading image', []));
                    } else {
                        res.json(jsonHandler.response(200, 'success', [banner_prefix]));
                    }
                });
            }
        });
    } else {
        res.json(jsonHelper.response(400, 'Params not valid', []));
    }
};

module.exports = bannerUpload;