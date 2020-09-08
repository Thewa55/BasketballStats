let playerName = ""

$("#playerSearch").on("click", function(event){
    event.preventDefault();
    playerName = $(".form-control").val();
    console.log(playerName)
    if(playerName === ""){
        return console.log("Search is empty!")
    }
    console.log(playerName + " After if")
    playerSearch(playerName)
})

function playerSearch(playerName){
    let URL = "https://www.balldontlie.io/api/v1/players?search="+playerName+"&per_page=100"
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