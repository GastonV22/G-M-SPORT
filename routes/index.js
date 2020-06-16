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
router.get('/listProducts',controllerIndex.listProducts);

router.get('/productoadd',controllerIndex.productoadd);

router.get('/edit/:idProducts',controllerIndex.edit)

router.post('/productoadd',controllerIndex.createProductoadd);

router.get('/edit/:idProducts',controllerIndex.edit)

//router.put('/edit/',controllerIndex.productsEdit)

router.delete('/delete/:idProducts',controllerIndex.delete);

//router.get('/search',controllerIndex.search)
 
//router.get('/:id',controllerIndex.detalle);

router.get('/carrito',controllerIndex.carrito);

router.get('/error',controllerIndex.error);

router.get('/faq',controllerIndex.faq);

module.exports = router;

