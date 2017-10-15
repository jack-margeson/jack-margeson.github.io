function saythatWasEasy() {
    var thatWasEasy = new Audio("that_was_easy.mp3");
    thatWasEasy.play();
}
$("#easy").on("click", saythatWasEasy);

$(document).keypress(delegateKeypress);

function delegateKeypress(event) {
    console.log(event.charCode);
    if (event.charCode == 13) {
        $("#easy").trigger("click");
    }
}