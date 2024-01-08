    /* API TMBD */
    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=503206748a708f185d9a4d74e34833cc&language=es-US&")

    .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            llenarDatos(data);
        })



    function llenarDatos(data) {

        var pelis = data.results;
        console.log(pelis);
        // Armar Tabla con el JSON
        $(pelis).each(function(i, value) {
            var card = "<div class='col-md-3 mb-4'>";

            card += "<div class='card'>";

            card += "<img src='https://image.tmdb.org/t/p/w500/" + value.poster_path + "' class='card-img-top'>";

            card += "<div class='card-body'>";
            card += "<h6 class='card-title text-center'>" + value.original_title + "</h6>";
            //
            card += "<p class='card-text text-center'>" + value.overview.substr(0, 100) + "... </p>";
            card += "<p class='card-text text-center'><i class='far fa-star text-warning'></i>  Puntuación " + value.vote_average + "</p>";
            card += "</div>";

            card += "</div>";

            card += "</div>";

            $("#lista-peliculas").append(card);
        })
    }