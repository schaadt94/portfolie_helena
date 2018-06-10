/*MENU fra lukket til åben*/

// Her finde jeg bredden på skærmen
var bredde = $(window).width();
console.log(bredde);

$(window).on("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    $(".menubutton").on("click", trykPaaMenubutton);
}

function trykPaaMenubutton() {
    console.log("tryk på menubutton");
    $("nav").toggleClass("hidden");
    //skift knappen frem og tilbage mellem kryds
    $(".menubutton").toggleClass("kryds");
}


// Hvis bredde er mindre end eller det samme som 576px (mobil størrelse)
if (bredde <= 576) {

    //For hver .container laver jeg et click event
    $(".container").click(function () {
        console.log("klikkede på container")
        // Finder nærmeste link og sætter som variablen "link"
        var link = $(this).find("a").attr("href");

        //Her redirecter jeg siden til linket sti
        location.href = link;
    });
}
