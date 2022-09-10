function menu() {
    let menuIcon = document.querySelector(".menuOpen");
    let menu = document.querySelector(".menu");


    if (menuIcon.classList == "menuOpen") {
        menuIcon.classList.add("close")
        menu.classList.add("open")
    }
    else {
        menu.classList.remove("open");
        menuIcon.classList = "menuOpen";
    }

}



