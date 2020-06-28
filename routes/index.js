const express = require('express');
const router = express.Router();
const controllerIndex = require("../controllers/controllerIndex");
const multer = require("multer");
const path = require("path");
/* GET home page. */


router.get('/', controllerIndex.home);

//router.get('/', function(req,res, next){
  //res.render('index');
//});

router.get('/carrito',controllerIndex.carrito);

router.get('/error',controllerIndex.error);

router.get('/faq',controllerIndex.faq);

module.exports = router;

