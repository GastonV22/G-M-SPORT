let userController={
   
    register: function(req,res,next){
        res.render('register')    
    },

  

    login: function(req,res,next){
        res.render('login')
    },

  
    
create: function (req,res,next){
        
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


'search':function(req,res,next){

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