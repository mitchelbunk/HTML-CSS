let slides = document.querySelector(".slider-items").children;
  let  nextSlide=document.querySelector(".right-slide");
let  prevSlide=document.querySelector(".left-slide");
let totalSlides=slides.length;
let index =0;

nextSlide.onclick=function (){
    next("next");
}

prevSlide.onclick=function (){
    next("prev");
}

function next(direction){

    if (direction == "next") {
        index++;
        if (index==totalSlides){
            index=0;
        }
    }


    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add("active");
    }

    slides[index].classList.remove("active");

}