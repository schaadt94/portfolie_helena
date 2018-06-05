$(window).on("load", sidenVises);

fuction sidenVises() {
    console.log("sidenVises")
    $(".menubutton").on("click", clickOnMenuButton);
}

fuction clickOnMenuButton() {
    console.log("der er trykket på menu");
    $("nav").toggleClass("hidden");
}
