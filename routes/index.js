"use strict";

var express = require('express');
var router = express.Router();
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var bannerCtrl=require("../controllers/banner/index");
var testimonialCtrl=require("../controllers/testimonials");
var tournamentsCtrl=require("../controllers/tournaments");
var cm=require("../middleware/customMiddelware");


// banner routes
router.post('/banner/*',cm.urlDecode);
router.post('/banner/upload/v1',multipartMiddleware,bannerCtrl.homeBanner);

//testimonial routes
router.post('/testimonial/*',cm.urlDecode);
router.post('/testimonial/get/v1',testimonialCtrl.get);
router.post('/testimonial/update/v1',testimonialCtrl.update);
router.post('/testimonial/post/v1',testimonialCtrl.post);

//tournaments routes
router.post('/tournaments/*',cm.urlDecode);
router.post('/tournaments/get/v1',tournamentsCtrl.get);
router.post('/tournaments/update/v1',tournamentsCtrl.update);
router.post('/tournaments/post/v1',tournamentsCtrl.post);



module.exports=router;