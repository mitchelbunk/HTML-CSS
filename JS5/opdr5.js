var plaatjes = [1,2,3,4,5,6,7,8,9];
var slideholder = document.getElementById("slideholder");
slideholder.style.backgroundImage = "url('Images/Guardian2.jpg')";

slideholder.addEventListener("click", function () {
    slideholder.style.backgroundImage = "url('Images/Guardian8.jpg')";

});