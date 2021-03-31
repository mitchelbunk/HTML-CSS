let body = document.getElementById('body');
let hexVariables = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F'];

function hexChanger(){

    let hex = "#";

    for (let i = 0; i < 6; i++) {
        let file = Math.floor(Math.random()*hexVariables.length) ;
        hex += hexVariables[file];
    }
    document.getElementById("id1").innerText = "hex Color = " + hex;

document.body.style.backgroundColor = hex;

}