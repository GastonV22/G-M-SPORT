let userController={
    'register': function(req,res, next){
        res.render('regiter')    
    },

    'carrito': function(req,res, next){
        res.render('carrito')
    },
    'detalle': function(req,res, next){
        res.render('detalle')
    },
    'error': function(req,res, next){
        res.render('error')
    },
    'faq': function(req,res, next){
        res.render('faq')
    },
    'index': function(req,res, next){
        res.render('index')

    },
    'productoadd': function(req,res, next){
        
        res.render('productoad')
    },
    'login': function(req,res, next){
        res.render('login')
    },

    'list':function (req,re,next){

    let users=[
        {id:1,},
        {id:2,}, 
        {id:3,},
        {id:4,},
        {id:5,},
    ]
    res.render('userlist',{'users':users});
},
    
create: function (req,res, next){
        
        let usuario = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            category: req.body.category,
            image: req.body.image
    }

//guardarla

    res.redirect('user/list')
},

createProductoadd : function (req,res, next){
        
    let producto = {
        producto: req.body.producto,
        marca: req.body.marca,
        deporte: req.body.deporte,
        genero: req.body.genero,
        precio: req.body.precio,
        image: req.body.image
}

res.redirect('/productoadd')
},
search:function(req,res,next){

    let loQueBuscoElUsuario= req.query.query;
    let users=[
        {id:1,},
        {id:2,},
        {id:3,},
        {id:4,},
        {id:5,},
    ]
let userResults =[];
for (let i =0;i <user.length;i ++){
  if (user[i].name.includes(loQueBuscoElUsuario)){
      userResults.push( users[i]); 
  }

}
 res.render('userResults',{userResults:userResults})  
},


//guardarla
    
       
}


module.exports= userController