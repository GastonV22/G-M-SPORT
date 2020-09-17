const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController");
const multer = require("multer");
const path = require("path");
const fs = require ('fs');
const adminMdw = require ("../middlewares/admin");
let { check, validationResult, body } = require("express-validator")

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

router.post('/create', upload.any(),[

  check("name").isLength({ min: 1 }).withMessage("El Nombre no puede estar vacio"),
  check("marca").isLength({ min: 1 }).withMessage("El Marca no puede estar vacio"),
  check("precio").isLength({ min: 1 }).withMessage("El Precio no puede estar vacio"),
  
   //validacion de email por BD
   ],productController.createProd);

router.get('/list',productController.list);

router.get('/:id',productController.detalle);

router.get('/edit/:id',productController.edit);

router.put('/edit/:id',upload.any(),productController.actualizar)

router.post('/delete/:id',productController.delete);

router.get('/search',productController.search);

module.exports = router;