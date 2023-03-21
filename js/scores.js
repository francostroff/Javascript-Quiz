function showHighscores() {
    var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];
    highscores.sort(function (a, b) {
        return b.score - a.score;
    });
    for (var i = 0; i < highscores.length; i+=1){
        var listItem = document.createElement('li');
        listItem.textContent = highscores[i].initials+ ' -- ' + highscores[i].score;
        var orderList = document.getElementById('highscores');
        orderList.appendChild(listItem);
    }
}


showHighscores();