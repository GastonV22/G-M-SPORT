const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");
const multer = require("multer");
const path = require("path");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'tmp/my-uploads')
    }, 
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })


//GET users listing. 

router.get('/register',userController.register);

router.post('/register', upload.any(),userController.createUser);

router.get('/login',userController.login);

router.post('/login',userController. processLogin);


//router.post('/login',userController.userList);



module.exports = router;

