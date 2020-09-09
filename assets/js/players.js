let playerName = ""

$("#playerSearch").on("click", function(event){
    event.preventDefault();
    playerName = $(".form-control").val();
    console.log(playerName)
    if(playerName === ""){
        return console.log("Search is empty!")
    }
    playerSearch(playerName)
})

let initialize = () => {
  $("#playerSection").hide();
}


let playerSearch = (playerName) => {
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
        if(response.data.length === 1){
            $("#playerSection").show();
            console.log(response.data)
            let playerData = response.data[0]
            displayData(response.data[0].id)
            let playerNameHeader = $("<h2>").text(playerData.first_name + " " + playerData.last_name);
            let playerPosition = $("<p>").text(playerData.position + " | " + playerData.team.abbreviation)
            $("#playerName").append(playerNameHeader);
            $("#playerName").append(playerPosition);
        }
    })
}

let displayData = (playerId) => {
    console.log(playerId)
    let playerURL = "https://www.balldontlie.io/api/v1/season_averages?player_ids[]="+playerId
    $.ajax({
        url: playerURL,
        method: "GET",
        statusCode: {404: ()=> {
            console.log("Can't fetch API");
            return;
        }}
    }).then(function(response){
        console.log(response);
    })
}

initialize();