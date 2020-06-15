const express = require('express');
const router = express.Router();
const controllerIndex = require("../controllers/controllerIndex");
const multer = require("multer");
const path = require("path");
/* GET home page. */


router.get('/', controllerIndex.index);

//router.get('/', function(req,res, next){
  //res.render('index');
//});

/*router.get('/productoadd',controllerIndex.productoadd);

router.post('/productoadd',controllerIndex.createProductoadd);

router.get('/listProducts',controllerIndex.listProducts);

router.get('/:idProducts',controllerIndex.edit)

router.put('/productsEdit',controllerIndex.productsEdit)

router.get('/search',controllerIndex.search)

router.get('/:id',controllerIndex.detalle);

router.get('/carito',controllerIndex.carrito);

router.get('/error',controllerIndex.error);

router.get('/faq',controllerIndex.faq);

module.exports = router;*/
