const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");
const multer = require("multer");
const path = require("path");

//GET users listing. 

router.get('/register',userController.register);

router.post('/register',userController.create);

router.get('/login',userController.login);

//router.post('/login',userController.userList);



module.exports = router;

