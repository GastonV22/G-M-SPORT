module.exports = function authMdw (req, res, next) {
 
  
  res.locals.logueado = false;
  
   if(req.session.logueado) {
    
      res.locals.logueado = true;
      res.locals.user = req.session.user;
   }

  next();  
}


