fetch("json/equipo.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        llenarTabla(data);
    })

function llenarTabla(data) {

    // Armar Tabla con el JSON
    $(data).each(function(i, value) {

        var fila = "<tr>";
        fila += "<td class='text-center'>" + value.id + "</td>";
        fila += "<td class='text-center'>" + value.nombres + "</td>";
        fila += "<td class='text-center'>" + value.cargo + "</td>";
        fila += "<td class='text-center'>" + value.estudios + "</td>";
        fila += "<td class='text-center'>" + value.pasatiempo + "</td>";
        fila += "</tr>";
        $("#tbody-equipo").append(fila);

    })


    // Mostrar mas innfo de la tabla
    $("#tbody-equipo tr").click(function() {
        //color cuando haces click
        $("#tbody-equipo tr").removeClass("table-info");
        $(this).addClass("table-info");
        //
        var posicion = $(this).index(); 
        var foto = data[posicion].foto;
        //para reemplazar la imagen definida por una que es en la tabla
        $("#foto-equipo").attr("src", foto)

        var nombres = data[posicion].nombres;
        $("#nombre-equipo").text(nombres)

        var contacto = data[posicion].contacto;
        $("#fono-equipo").html("<i class='fab fa-whatsapp text-success'></i> " + contacto)
    })

}




