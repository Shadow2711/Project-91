function addUser(){
    player_1 = document.getElementById("input_player1_name").value;
    player_2 = document.getElementById("input_player2_name").value;
    localStorage.setItem("player1_name", player_1);
    localStorage.setItem("player2_name", player_2);
    window.location = "game_page.html";
}
function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    ans_number = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" +number1+ "X" +number2+ "</h4>";
    input_box = "<br>Answer : <input id = 'input_check_box' type = 'number'>";
    check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'>Check</button>";
    row = question_number + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}