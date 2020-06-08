var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/register',userController.register);

router.post('/register',userController.create);

router.get('/carito',userController.carrito);

router.get('/detalle',userController.detalle);

router.get('/error',userController.error);

router.get('/faq',userController.faq);

router.get('/index',userController.index);

router.get('/login',userController.login);

router.get('/productoadd',userController.productoadd);

router.post('/productoadd',userController.createProductoadd);

router.get('/list',userController.list)

router.get('/search',userController.search)


module.exports = router;
