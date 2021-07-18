function showImage() {
    let round = document.getElementById("report").innerHTML;
    let maxScore = document.getElementById("maxScore").value;
    document.getElementById("maxScore").style.visibility = "hidden";
    document.getElementById("maxScore1").style.visibility = "hidden";
    document.getElementById("dispMaxScore").style.visibility = "visible"
    document.getElementById("dispMaxScore").innerHTML = `Max Score : ${maxScore}`;
    let p1Score = document.getElementById("player1").innerHTML;
    let p2Score = document.getElementById("player2").innerHTML;
    // console.log(maxScore)
    const diceFace = generateRandomNumber(1, 6);
    fetchImage(0, 'gif');
    setTimeout(function () { gameRun(p1Score, p2Score, diceFace, round, maxScore) }, 1200);
    // gameRun(p1Score,p2Score,diceFace,round,maxScore); 
}
function generateRandomNumber(min, max) {
    return (Math.floor(Math.random() * (max - min + 1) + min));
}
async function fetchImage(num, extention) {
    const response = await fetch(`public/dice/Alea_${num}.${extention}`);
    const blob = await response.blob();
    document.getElementById('dice').src = URL.createObjectURL(blob);
}
function gameRun(p1Score, p2Score, diceFace, round, maxScore) {
    fetchImage(diceFace, 'png');
    let i = parseInt(round);
    let p1 = parseInt(p1Score);
    let p2 = parseInt(p2Score);
    maxScore = parseInt(maxScore);
    // console.log(p1,p2,i,maxScore);
    if (p1 < maxScore && p2 < maxScore) {
        if (round % 2 == 0) {
            //player1
            document.getElementById("player1").innerHTML = p1 + diceFace;

            if ((p1 + diceFace) >= maxScore) {
                let winner = "Player 1 won previous game!!";
                // alert("Player 1 won game!!")
                setTimeout(function(){
                    resetGame(winner);
                    alert("Player 1 won game!!");
                },1000);
            }
            if (diceFace == 6) {
                document.getElementById("chance").innerHTML = "Player 1 roll dice again!!";
            }
            else {
                document.getElementById("report").innerHTML = i + 1;
                document.getElementById("chance").innerHTML = "Player 2 roll dice !!";
            }

        }
        else {
            //player2
            document.getElementById("player2").innerHTML = p2 + diceFace;
            if ((p2 + diceFace) >= maxScore) {
                let winner = "Player 2 won previous game!!";
                // alert("Player 2 won game!!")
                setTimeout(function(){
                    resetGame(winner);
                    alert("Player 2 won game!!");
                },1000);
                
            }
            if (diceFace == 6) {
                document.getElementById("chance").innerHTML = "Player 2 roll dice again!!";
            }
            else {
                document.getElementById("report").innerHTML = i + 1;
                document.getElementById("chance").innerHTML = "Player 1 roll dice !!";
            }
        }
    }


}
function resetGame(winner = "Game is reset") {
    document.getElementById("player1").innerHTML = 0;
    document.getElementById("player2").innerHTML = 0;
    document.getElementById("report1").innerHTML = winner;
    document.getElementById("report").innerHTML = 0;
    document.getElementById("maxScore").style.visibility = "visible";
    document.getElementById("maxScore1").style.visibility = "visible";
    document.getElementById("dispMaxScore").style.visibility = "hidden";
    fetchImage(7, 'png')
}
