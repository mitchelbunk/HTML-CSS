
let plaatjes3 = [1,2,3,4,5,6,7,8,9,10,11,12];
let teller3 = 0;
let slideholder3 = document.getElementById("slideholder3");
slideholder3.style.backgroundImage = "url('Images2/Guardian12.png')";

slideholder3.addEventListener("click", function () {

    slideholder3.style.backgroundImage = "url('Images2/Guardian"+ getGuardian3() +".png')";


});

function getGuardian3 () {
    if (teller3 >= plaatjes3.length) {
        teller3 = 1;
    }else {
        teller3++;
    }
    console.log(teller3);
    return teller3;}