let playerName = ""

$("#playerSearch").on("click", function(event){
    event.preventDefault();
    playerName = $(".form-control").val();
    console.log(playerName)
    if(playerName != ""){
        return console.log("Player searched!")
    }

})