//To hide first div and show second
let showAndHide = function (id1, id2) {
    $(`#${id1}`).hide()
    $(`#${id2}`).show()
}

//This is to validate code
function codeComparison() {
    let inputCode = $("#code-input").val();
    console.log(inputCode)
    //Compare input code to room codes available
    // if (input code exists)
        showAndHide("roomCode", "pregame")
    // else
    // Request new code
}

function submitUsername() {
    //I don't think there needs to be validation if name is already taken but it may mess us up.  Unless each player is named player i to our programming

    //AJAX post user name to room
        //This should post it to the host to display the name on the players box

    //Shows next input if they want
    showAndHide("username", "createCards")
}

function submitCards() {
    //Can they make duplicates in the deck or not (?)

    //AJAX post card words to room
        //This should post it to the deck (?)
        //I think this means a deck instance has to be made for each game.  So maybe you pull the original deck once then you post new cards into our "Sudodeck"
    
    //reset input so they can make more cards
}

//Code comparison listener
$('#roomCode').submit(function(e) {
    e.preventDefault()
    codeComparison()
});

//Name submit listener
$("#username").submit(function(e) {
    e.preventDefault();
    submitUsername()
})

//Name submit listener
$("#createCards").submit(function(e) {
    e.preventDefault();
    submitCards()
})

//On game start
    // showAndHide("pregame", "hand")
