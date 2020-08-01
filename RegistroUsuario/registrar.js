 function post() {
     Swal.fire({
         title: 'REGISTRADO EXITOSAMENTE!',
         text: 'Do you want to continue',
         icon: 'success',
         confirmButtonText: 'ACEPTAR'
     });

     const data = document.getElementsByClassName('input');
     for (var i = 0; i < data.length; i++) {
         console.log(data[i].value);
     }
     console.log(typeof(data));


     const url = 'https://marketec-boot.herokuapp.com/usuario/';
     const parametros = {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(objeto)
     };

     fetch(url, parametros);


     var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
         url = 'https://marketec-boot.herokuapp.com/personas/'
     fetch(proxyUrl + url, parametros);
 }