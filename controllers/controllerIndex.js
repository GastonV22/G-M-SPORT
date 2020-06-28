let controllerIndex={
    
    home: function(req,res, next){
        res.render('index')
        ;next();
    },
    carrito: function(req,res, next){
        res.render('carrito')
        ;next();
    },
   
    error: function(req,res, next ){
        res.render('error')
        ;next();
    },
    faq: function(req,res, next){
        res.render('faq') 
        ;next();
    },

}



module.exports= controllerIndex;
