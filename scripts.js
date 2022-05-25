const datos = [
    {
        picsum: "https://picsum.photos/id/1013/200/300",
        title: "Happier",
        text: "Canción de Ed Sheeran",
    },
    {
        picsum: "https://picsum.photos/id/1048/200/300",
        title: "Hoy es un lindisimo dia",
        text: "El dia esta muy soleado, no hace tanto frio como siempre",
    },
    {
        picsum: "https://picsum.photos/id/106/200/300",
        title: "Perspectiva",
        text: "Sacar fotos de diferentes angulos de la arquitectura es genial! ",
    },
    {
        picsum: "https://picsum.photos/id/1081/200/300",
        title: "Que lindo que es soñar",
        text: "Dia estas palabras cantando",
    },
];

datos.forEach((d, i) => {
    if (i % 2 == 0) {
        // par
        document.getElementById("trabajos").innerHTML +=
            '<div class="row g-0"><div class="col-md-6 order-md-2 text-white showcase-img" style="background-image: url(' +
            d.picsum +
            ')"></div><div class="col-md-6 order-md-1 my-auto showcase-text"><h2>' +
            d.title +
            '</h2><p class="lead mb-0">' +
            d.text +
            "</p></div></div>";
    } else {
        // impar
        document.querySelector("#trabajos").innerHTML +=
            '<div class="row g-0"><div class="col-md-6 text-white showcase-img" style="background-image: url(' +
            d.picsum +
            ')"></div><div class="col-md-6 my-auto showcase-text"><h2>' +
            d.title +
            '</h2><p class="lead mb-0">' +
            d.text +
            "</p></div></div>";
    }
});

async function users() {
    const consulta = await fetch("https://randomuser.me/api/?results=4");
    const data = await consulta.json();
    const resultados = data.results;
    console.log(resultados);

    resultados.forEach((p) => {
        document.getElementById("personas").innerHTML +=
            '<div class="col-6 col-md-3"><div class="testimonial-item mx-auto mb-5 mb-lg-0"><img class="img-fluid rounded-circle mb-3" src="' +
            p.picture.large +
            '" alt="..." /><h5>' +
            p.name.first +
            " " +
            p.name.last +
            '</h5><p class="font-weight-light mb-0">' +
            p.location.city +
            ", " +
            p.location.country +
            " <br><i class='bi bi-envelope-open-heart'></i>";
    });
}
users().catch((error) => console.error(error));
