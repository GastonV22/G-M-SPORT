window.onload = () => {
    
    let submit = document.querySelector("#submit");
    let reset = document.querySelector("#reset");
    let formCarga = document.querySelector("#formCarga");

    formulario.onsubmit = function(event){

            let nombre = formCarga.querySelector("#nombre");
            let marca = formCarga.querySelector("#marca");
            let descripcion = formCarga.querySelector("#descripcion");            
            let stock = formCarga.querySelector("#stock");
            let precio = formCarga.querySelector("#precio");
           
           
           
           
            if(nombre.value.length<5){
                formCarga.querySelector("#errorNombre").innerText= "Debes completar el nombre";
                nombre.style.backgroundColor="#FF655D";
                event.preventDefault();
            };
            if(!marca.value){
                formCarga.querySelector("#errorMarca").innerText= "Debes seleccionar un marca";
                genre.style.backgroundColor="#FF655D";
                event.preventDefault();
            };
            if(descripcion.value.length<50){
                formCarga.querySelector("#errorDescripcion").innerText= "La descripcion debe tener al menos 50 caracteres";
                descripcion.style.backgroundColor="#FF655D";
                event.preventDefault();
            };
            if(!stock.value){
                formCarga.querySelector("#errorStock").innerText= "Debes completar el stock";
                stock.style.backgroundColor="#FF655D";
                event.preventDefault();
            };
            
      
      
            if(!precio.value){
                formCarga.querySelector("#errorPrecio").innerText= "Debes completar el precio";
                precio.style.backgroundColor="#FF655D";
                event.preventDefault();
            };
       
            
           

            
            if( /\.(jpe?g|png|gif)$/i.test(adjuntarimagen.files[0].name) === false ){ 
                formCarga.querySelector("#erroradjuntarimagen").innerText= "los formatos admitidos son jpg. png. jpeg.";
                adjuntarimagen.style.backgroundColor="#FF655D";
                event.preventDefault();
              
            };
            





        }


}