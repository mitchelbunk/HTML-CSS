
pics = document.getElementById("pics");
createPicsHolders();
createGuardianImages();

function createPicsHolders() {
    for (var i = 0; i < 12; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + i;
        pics.appendChild(pictureHolder);
    }
}

function createGuardianImages() {
    pictureHolders = document.getElementsByClassName("picture-holder");
    for (var i = 0; i < pictureHolders.length; i++) {
        favoriet = document.createElement("div");
        favoriet.className = "favoriet";
        favoriet.id = "favoriet" + (i + 1);
        guardianPlaatje = document.createElement("img");
        guardianPlaatje.src = "Images3/Guardian" + (i+1) + ".png";
        guardianPlaatje.id = (i+1);
        pictureHolders[i].addEventListener("click", function ()
        {
            maakFavoriet(this.childNodes[1].id);
        });
        pictureHolders[i].appendChild(favoriet);
        pictureHolders[i].appendChild(guardianPlaatje);
    }
}

function maakFavoriet (id) {
//    console.log("maak mij favoriet! het gaat om Guardian...." + id );

    notsofavoriet = document.getElementsByClassName("favoriet");

    for (var i = 0; i < notsofavoriet.length; i++) {
        notsofavoriet[i].style.backgroundImage = "none";
    }

    favoriet = document.getElementById("favoriet" + id);
    favoriet.style.backgroundImage = "url('Images3/hart.png')";
}
