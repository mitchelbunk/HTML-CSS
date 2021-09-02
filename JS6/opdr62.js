
var plaatjes2 = [1,2,3,4,5,6,7,8,9,10,11,12];
var teller2 = 0;
var slideHolder2 = document.getElementById("slideholder2");
slideHolder2.style.backgroundImage = "url('Images2/Guardian12.png')";

slideHolder2.addEventListener("click", function () {

    slideHolder2.style.backgroundImage = "url('Images2/Guardian"+ getGuardian2() +".png')";


});

function getGuardian2 () {
    if (teller2 >= plaatjes2.length) {
        teller2 = 1;
    }else {
        teller2++;
    }
    console.log(teller2);
    return teller2;
}