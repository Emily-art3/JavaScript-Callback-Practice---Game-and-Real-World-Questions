function coinCollector(player, callback){
    setTimeout(() =>{

        if (player.score === 0) {
            player.score = Math.floor(Math.random() * 10) + 1; // 1 to 10
        //    console.log("Expected: A number between 1 and 10");
        } else if (player.score === 40) {
            player.score = Math.floor(Math.random() * 10) + 41; // 41 to 50
           // console.log("Expected: A number between 41 and 50");
        } else if (player.score >= 50 && player.score <= 59) {
            player.score = Math.min(59, Math.floor(Math.random() * 10) + 50); // 50 to 59
            //console.log("Expected: A number between 50 and 59")
            if (player.score >= 58) {
                console.log(`Player ${player.playerName} Wins!`); // Win message if score reaches 59
            }
        }
        callback(player);
    }, 2800)
}

coinCollector({ playerName: "Player 1", score: 0 }, function(updatedPlayer) {
    console.log(updatedPlayer.score); // Expected: A number between 1 and 10
});
coinCollector({ playerName: "Player 2", score: 40 }, function(updatedPlayer) {
    console.log(updatedPlayer.score); // Expected: A number between 41 and 50
});
coinCollector({ playerName: "Player 3", score: 58 }, function(updatedPlayer) {
    console.log(updatedPlayer.score); // Expected: A number between 50 and 59, and possibly win message
});