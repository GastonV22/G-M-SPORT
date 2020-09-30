let controllerIndex={
    
    home: function(req,res,next ){
        req.session.logueado= false;
        res.render('index')
        ;next();
    },
    carrito: function(req,res, next){
        res.render('carrito', )
        ;next();
    },
    
    error: function(req,res,  ){
        res.render('error')
        
    },
    faq: function(req,res, ){
        res.render('faq') 
       
    },

}



module.exports= controllerIndex;
