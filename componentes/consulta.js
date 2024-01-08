fetch("https://panda5691.000webhostapp.com/categoria.php")
    .then(function(response){
        return response.json();                    
    })
    .then(function(data){
        console.log(data);  
        llenarLista(data);
    })

function llenarLista(data){
    $(data).each(function(index,value){
        var item = '<li class="list-group-item">'
        item += '<h5>' + value.nombre + '</h5>'
        item += '<small>' + value.descripcion + '</small> <br>'
        item += '<img class="align-items-center w-100 pb-2" src="https://panda5691.000webhostapp.com/foto/' + value.foto + '"alt="...">'
        item += '</li>';
        $("#lista-categorias").append(item);
    });

    $("#lista-categorias li").click(function() {
        var posicion = $(this).index();
        console.log(posicion);

        $("#categoria-nombre").text(data[posicion].nombre);
        $("#categoria-descripcion").text(data[posicion].descripcion);

        var idcategoria = data[posicion].idcategoria;
         leerProductoPorCategoria(idcategoria);
    });

}
function leerProductoPorCategoria(idcategoria){
    var rutaServicio = "https://panda5691.000webhostapp.com/productoxcategoria.php";
    var formData = new FormData();
    formData.append("cake", idcategoria);
    fetch(rutaServicio,
        {
            method: "POST",
            body: formData
        })
    .then(function(response){
        return response.json();                    
    })
    .then(function(data){
        console.log(data);
        llenarTablaProductos(data);  
    });
}

function llenarTablaProductos(data){
    $("#tbody-consulta").html("");
    $(data).each(function(index,value){
        var fila = "<tr>";
        fila += "<td>" + value.idcake + "</td>";
        fila += "<td>" + value.nombre + "</td>";
        fila += "<td>" + value.detalle + "</td>";
        fila += "<td class='text-end'>" + (parseFloat(value.precio)).toFixed(2); + "</td>";
        fila += "</tr>";
        $("#tbody-consulta").append(fila);
    });

    $("#cards-consulta").html("");
    $(data).each(function(index,value){
        var card = '<div class="col">';
        card += '<div class="card h-100 border-0 pt-3">';
        card += '<img src="https://panda5691.000webhostapp.com/imagenes/' + value.imagengrande + '" class="card-img-top" alt="...">'
        card += '<div class="card-body">'
        card += '<h5 class="card-title">' + value.nombre + '</h5>'
        card += '<p class="card-text">' + value.detalle + '</p>'
        card += '<p class="card-text">' + (parseFloat(value.precio)).toFixed(2); + '</p>'
        card += '</div>'
        card += '</div>'
        card += '</div>';
        $("#cards-consulta").append(card);
    });
}