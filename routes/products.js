const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController");
const multer = require("multer");
const path = require("path");


router.get('/listProducts',productController.list);

router.get('/create',productController.add);

router.post('/create',productController.create);

router.get('/edit',productController.edit)

router.put('/edit',productController.edit)

router.delete('/delete/:idProducts',productController.delete);

router.get('/search',productController.search)

module.exports = router;