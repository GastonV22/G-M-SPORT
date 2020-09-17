window.addEventListener('load', () => {

    let formulario = document.querySelector('.form-create');

    formulario.addEventListener('submit', e => {

        let name = document.querySelector('#name');

        if (name.value.length < 3) {
            e.preventDefault();
            let nombreError = name.parentElement.querySelector('.errors');
            nombreError.innerText = 'El nombre debe tener al menos 4 caracteres'
        }

        let precio = document.querySelector('#precio');

        if (!precio.value) {
            e.preventDefault();
            let marcaError = precio.parentElement.querySelector('.errors');
            precioError.innerText = 'Debe agregar el precio'
        }

        let marca = document.querySelector('#marca');

        if (marca.value.length < 20) {
            e.preventDefault();
            let marcaError = marca.parentElement.querySelector('.errors');
            marcaError.innerText = 'Debe agregar la Marca'
        }

    })

})
