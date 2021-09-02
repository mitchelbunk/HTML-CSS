// var plaatjes1 = [1,2,3,4,5,6,7,8,9,10,11,12];
// var teller1 = 0;
// var slideholder1 = document.getElementById("slideholder1");
// slideholder1.style.backgroundImage = "url('Images2/Guardian12.png')";
//
// document.getElementById("next").addEventListener("click", nextSlide())
//
// document.getElementById("next").addEventListener("click", prevSlide());
//
// slideholder1.addEventListener("click", function () {
//     slideholder1.style.backgroundImage = "url('Images2/Guardian"+ getGuardian1() +".png')";
// });
//
//
//
// function nextSlide () {
//     if (teller1 >= plaatjes1.length) {
//         teller1 = 1;
//     }else {
//         teller1++;
//     }
//     console.log(teller1);
//     return teller1; }
//
// function prevSlide () {
//     if (teller1 >= plaatjes1.length) {
//         teller1 = 1;
//     }else {
//         teller1--;
//     }
//     console.log(teller1);
//     return teller1; }


const imageElements = document.querySelectorAll(".plaatjes");
const plaatjes = [1, 2, 3]
const activeImage = document.querySelector(".visible");

for (let i = 0; i < imageElements.length; i++) {
    plaatjes[i].addEventListener("click", function() {
        const imageSrc = activeImage.getAttribute("src");
    });
}