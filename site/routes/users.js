const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");
const multer = require("multer");
const rememberMiddleware= require ('../middlewares/rememberMiddleware');
const {check, validationResult, body}= require('express-validator');
const fs = require ('fs');
const path = require("path"); 



var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/imgUser')
    }, 
    
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage,
  // fileFilter: (req, file, cb) => {
  //   const acceptedExtensions = ['.jpg', '.jpeg', '.png'];
  //   const ext = path.extname(file.originalname);
  //   if (acceptedExtensions.includes(ext)){
  //       //si es correcto subo la imagen
  //       cb(null, true);
  //   } else {
  //       //aqui guardo la imagen en el body
  //       req.file = file;
  //       //le digo que no la suba
  //       cb(null, false);
  //   }
  // }
})  


//GET users listing. 

router.get('/register',userController.register);

router.post('/register', upload.any(),userController.createUser);

router.get('/login',userController.login);

router.post('/login',[
  check('email'). isEmail().withMessage('El email debe ser valido '),
  check('password').isLength({mim:7}).withMessage('Este campo debe contener un minimo de 7 caracteres '),
body ('email').custom(function(value){
  let archivoUser= fs.readFileSync('data/user.JSON', {encoding:'utf-8'});
  let usuarios;
  if(archivoUser== "") {
       usuarios=[]; 
      
  }else{
      usuarios = JSON.parse(archivoUser)

              }
              for (let i= 0;i<usuarios.length; i ++){
                if(usuarios[i].email== value){
                  return true;

                }
              }
              return false;

}). withMessage('usuario no esta logueado ')
],userController. processLogin);

 
//router.post('/login',userController.userList);



module.exports = router;

