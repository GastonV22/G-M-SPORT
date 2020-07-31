let controllerIndex={
    
    home: function(req,res, ){
        res.render('index')
        ;next();
    },
    carrito: function(req,res, next){
        res.render('carrito')
        ;next();
    },
    
    error: function(req,res,  ){
        res.render('error')
        ;next();
    },
    faq: function(req,res, ){
        res.render('faq') 
        ;next();
    },

}



module.exports= controllerIndex;
