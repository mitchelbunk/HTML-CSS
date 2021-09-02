
let plaatjes1 = [1,2,3,4,5,6,7,8,9,10,11,12];
let teller1 = 0;
let slideHolder1 = document.getElementById("slideholder1");
slideHolder1.style.backgroundImage = "url('Images2/Guardian12.png')";

slideHolder1.addEventListener("click", function () {

    slideHolder1.style.backgroundImage = "url('Images2/Guardian"+ getGuardian1() +".png')";


});


function getGuardian1 () {
    if (teller1 >= plaatjes1.length) {
        teller1 = 1;
    }else {
        teller1++;
    }
    console.log(teller1);
    return teller1; }