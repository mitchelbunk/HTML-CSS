let getalEen = "";
let getalTwee = "";
let berekeningsWaarde = "";
let resultaat = 0 ;
function Tel1(){
    getalEen += "1";
    document.getElementById("huidiggetal").innerText = getalEen;
}
function Tel2(){
    if (berekeningsWaarde == ""){
        getalEen += "2";
        document.getElementById("huidiggetal").innerText = getalEen
    }else {
        getalTwee += "2";
        document.getElementById("huidiggetal").innerText = getalTwee;
    }
}
function Tel3(){
    if (berekeningsWaarde == ""){
        getalEen += "3";
        document.getElementById("huidiggetal").innerText = getalEen
    }else {
        getalTwee += "3";
        document.getElementById("huidiggetal").innerText = getalTwee;
    }
}
function Tel4(){
    if (berekeningsWaarde == ""){
        getalEen += "4";
        document.getElementById("huidiggetal").innerText = getalEen
    }else {
        getalTwee += "4";
        document.getElementById("huidiggetal").innerText = getalTwee;
    }
}
function Tel5(){
    if (berekeningsWaarde == ""){
        getalEen += "5";
        document.getElementById("huidiggetal").innerText = getalEen
    }else {
        getalTwee += "5";
        document.getElementById("huidiggetal").innerText = getalTwee;
    }
}
function Tel6(){
    if (berekeningsWaarde == ""){
        getalEen += "6";
        document.getElementById("huidiggetal").innerText = getalEen
    }else {
        getalTwee += "6";
        document.getElementById("huidiggetal").innerText = getalTwee;
    }
}
function Tel7(){
    if (berekeningsWaarde == ""){
        getalEen += "7";
        document.getElementById("huidiggetal").innerText = getalEen;
    }else {
        getalTwee += "7";
        document.getElementById("huidiggetal").innerText = getalTwee;
    }
}
function Tel8(){
    if (berekeningsWaarde == ""){
        getalEen += "8";
        document.getElementById("huidiggetal").innerText = getalEen;
    }else {
        getalTwee += "8";
        document.getElementById("huidiggetal").innerText = getalTwee;
    }
}
function Tel9(){
    if (berekeningsWaarde == ""){
        getalEen += "9";
        document.getElementById("huidiggetal").innerText = getalEen
    }else {
        getalTwee += "9";
        document.getElementById("huidiggetal").innerText = getalTwee;
    }
}
function Tel0(){
    if (berekeningsWaarde == ""){
        getalEen += "0";
        document.getElementById("huidiggetal").innerText = getalEen
    }else {
        getalTwee += "0";
        document.getElementById("huidiggetal").innerText = getalTwee;
    }
}
function TelPlus () {
    berekeningsWaarde = "+";
}
function TelMin () {
    berekeningsWaarde = "-";
}
function TelDeel () {
    berekeningsWaarde = "/";
}
function TelKeer () {
    berekeningsWaarde = "*";
}
function TelIs () {
    if (berekeningsWaarde == "+") {
        resultaat = parseInt(getalEen) + parseInt(getalTwee);
        document.getElementById("huidiggetal").innerText = resultaat;
        berekeningsWaarde = "";
        getalEen = "";
        getalTwee = "";
    }
    else if (berekeningsWaarde == "-"){
        resultaat = parseInt(getalEen) - parseInt(getalTwee);
        document.getElementById("huidiggetal").innerText = resultaat;
        berekeningsWaarde = "";
        getalEen = "";
        getalTwee = "";
    }
    else if (berekeningsWaarde == "/"){
        resultaat = parseInt(getalEen) / parseInt(getalTwee);
        document.getElementById("huidiggetal").innerText = resultaat;
        berekeningsWaarde = "";
        getalEen = "";
        getalTwee = "";
    }
    else if (berekeningsWaarde == "*"){
        resultaat = parseInt(getalEen) * parseInt(getalTwee);
        document.getElementById("huidiggetal").innerText = resultaat;
        berekeningsWaarde = "";
        getalEen = "";
        getalTwee = "";
    }
}