const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController");
const multer = require("multer");
const path = require("path");
const fs = require ('fs');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/imgProd')
    }, 
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })



router.get('/create',productController.create);

router.post('/create', upload.any(),productController.createProd);

router.get('/list',productController.list);

router.get('/:id',productController.detalle);

router.get('/edit:id',productController.edit)

router.post('/edit:id',productController.edit)

router.get('/delete/:id',productController.delete);

router.get('/search',productController.search)

module.exports = router;