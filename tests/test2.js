var inputText = "";
document.getElementById("sendMessage").addEventListener("click",function () {
    onclick()
});

function onclick (){

    inputText = document.getElementById("textfield").value;



    document.getElementById("latestMessage").innerText = inputText;
    document.getElementById("textfield").value = "";
}