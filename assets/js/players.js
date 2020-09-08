let playerName = ""

$("#playerSearch").on("click", function(event){
    event.preventDefault();
    playerName = $(".form-control").val();
    console.log(playerName)
    if(playerName === ""){
        return console.log("Search is empty!")
    }
    console.log(playerName + " After if")
})

function initialize(){
    let URL = "https://www.balldontlie.io/api/v1/players"
    console.log(URL)
    $.ajax({
        url: URL,
        method: "GET",
        statusCode: {404: ()=> {
            console.log("Can't fetch API");
            return
        }}
    }).then(function(response){
        console.log(response);
    })
}

initialize();