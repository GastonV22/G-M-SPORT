const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController");
const multer = require("multer");
const path = require("path");
const fs = require ('fs');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'tmp/my-uploads/products')
    }, 
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })


router.get('/list',productController.list);

router.get('/create',productController.create);

router.post('/create', upload.any(),productController.createProd);

router.get('/edit',productController.edit)

router.put('/edit',productController.edit)

router.delete('/delete/:idProducts',productController.delete);

router.get('/search',productController.search)

module.exports = router;