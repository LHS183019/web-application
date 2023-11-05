let dialog = document.getElementById("yeah");

dialog.onclick = function()
{
    circle.classList.toggle("active");
    setTimeout(function(){
        yeah.classList.toggle("hidden");
        twenty.classList.toggle("correct");
    }, 2000);
    return false;
}
