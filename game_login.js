function adduser(){
    player_1 = document.getElementById("player1_name_input").value;
    player_2 = document.getElementById("player2_name_input").value;
    localStorage.setItem("Player 2", player_2);
    localStorage.setItem("Player 1", player_1);
    window.location.replace("quiz_game_page.html");
}