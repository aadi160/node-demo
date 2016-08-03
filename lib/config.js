"use strict";

var config = {
    port: 4231,
    environ: 'dev',
    v:'0.0.1',
    mongo_db_option: {
        driver    : 'mongodb',
        host      : 'localhost',
        port      : '27017',
        username  : '',
        password  : '',
        database  : 'adda52',
        pool      : false
    },
    test_users:['9199999999'],
    test_otp:['987654'],
    mongo_uri:'mongodb://localhost/adda52live',
    banner_dir:"public/images/banners",
    dp_path : "/root/nodeApp/public/userPic",
    log_config:  {"appenders": [
        {
            "type": "file",
            "absolute": true,
            "filename": "/var/log/adda52live/access.log",
            "maxLogSize": 20480,
            "backups": 10,
            "category": "adda52"
        }
    ]},
    'googleAuth' : {
        'clientID'      : '816580436883-cvofbv3n6nvusv935rn7d71pq55t8lrf.apps.googleusercontent.com',
        'clientSecret'  : 'LMWQUud2CgOz-PVAn7xRNBy6',
        'callbackURL'   : 'http://localhost:3001/oauth2callback'
    },

};

module.exports = config;