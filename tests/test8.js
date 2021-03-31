let elementen = [];

for (let i = 0; i < 12; i++) {
elementen.push(document.createElement("div"));
}

for (let i = 0; i <elementen.length; i++) {
    document.getElementById("Baas").appendChild(elementen[i]);
        elementen[i].id = i+1;
        elementen[i].className = "tellers";
        elementen[i].innerText = "element nr" + i;
}