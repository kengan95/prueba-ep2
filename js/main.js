$(function() {

    // Fetch menu páginas
    $(".menu-tienda").click(function() {
        $(".nav-item a").removeClass("active-menu");
        $(this).addClass("active-menu");
        fetch("componentes/tienda.html")
            .then(function(response) {
                return response.text();
            })
            .then(function(data) {
                $("#main-content").html(data)
            })
    });
    $("#menu-equipo").click(function() {
        $(".nav-item a").removeClass("active-menu");
        $(this).addClass("active-menu");
        fetch("componentes/equipo.html")
            .then(function(response) {
                return response.text();
            })
            .then(function(data) {
                $("#main-content").html(data)
            })
    });
    $("#menu-preguntas").click(function() {
        $(".nav-item a").removeClass("active-menu");
        $(this).addClass("active-menu");
        fetch("componentes/preguntas.html")
            .then(function(response) {
                return response.text();
            })
            .then(function(data) {
                $("#main-content").html(data)
            })
    });
    $("#menu-contacto").click(function() {
        $(".nav-item a").removeClass("active-menu");
        $(this).addClass("active-menu");
        fetch("componentes/contacto.html")
            .then(function(response) {
                return response.text();
            })
            .then(function(data) {
                $("#main-content").html(data)
            })
    })

    $("#menu-pelis").click(function() {
        $(".nav-item a").removeClass("active-menu");
        $(this).addClass("active-menu");
        fetch("componentes/peliculas.html")
            .then(function(response) {
                return response.text();
            })
            .then(function(data) {
                $("#main-content").html(data)
            })
    })


    $("#menu-consulta").click(function() {
       $(".nav-item a").removeClass("active-menu");
       $(this).addClass("active-menu");

       fetch("componentes/consulta.html")
           .then(function(response) {
               return response.text();
           })
           .then(function(data) {
               $("#main-content").html(data)
               })
   })













});