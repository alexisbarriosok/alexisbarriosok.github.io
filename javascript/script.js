$(document).ready(function() {    
    $('.top a').click(function(e){
            e.preventDefault();
            var offset = $($(this).attr('href')).offset().top;
            $('html, body').animate({scrollTop:offset}, 600);
            return false;
        });
    
    });	
        
$.ajax({
    url: 'https://randomuser.me/api/?seed=271',
    dataType: 'json',
    success: function(data) {
      var imagen = data.results[0].picture.large;
      var nombre = data.results[0].name.first + ' ' + data.results[0].name.last;
      var email = data.results[0].email;
      var domicilio = data.results[0].location.street.name + ' ' + data.results[0].location.street.number + ', ' + data.results[0].location.city + ', ' + data.results[0].location.country;
      var telefono = data.results[0].phone;
      var celular = data.results[0].cell;
      var fechanac = data.results[0].dob.date;


      document.getElementById('imagen-usuario').src = imagen;
      document.getElementById('nombre-usuario').textContent = 'Nombre: ' + nombre;
      document.getElementById('email-usuario').textContent = 'Email: ' + email;
      document.getElementById('domicilio').textContent = 'Domicilio: ' + domicilio;
      document.getElementById('telefono').textContent = 'Telefono: ' + telefono;
      document.getElementById('celular').textContent = 'Celular: ' + celular;
        const fecha = new Date(fechanac);
        const fechaFormateada = fecha.toLocaleDateString('es-ES'); // Formato DD/MM/YYYY
        document.getElementById('fechanac').textContent = 'Fecha de nacimiento: ' + fechaFormateada;
    }
});
