window.onload = () => {

   let formulario = document.querySelector("form.formulario")
    
console.log(1)
    formulario.onsubmit = function(event){
      
      
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
       
         
console.log(2)

        let invalidEmail = document.getElementById("invalidEmail");
        let invalidPassword = document.getElementById("invalidPassword");
        

        let errorEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
          
console.log(3)
    
        if( email == "" ){
          
            invalidEmail.innerHTML = "El Email esta vacio js"
            event.preventDefault();
        }

    
        console.log(4)

        if(password == "" || password.length < 4){
            
            invalidPassword.innerHTML = "El Password debe tener 4 caracteres como minimo"
            event.preventDefault();
        }
        


       
    
        console.log(5)
        

        
    }




}

