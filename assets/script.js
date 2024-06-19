const board = document.querySelector("#board");
let play = "X";
const cells = document.querySelectorAll(".cell");
let tabuleiro = [[]];
let ganhou = false;

tabuleiro.forEach((cell, i) => {
    tabuleiro[i] = cell;
    console.log(cell);
});
console.log("")

board.addEventListener("click", (event) => {
    if (event.target.classList.contains("cell")) {
        if(event.target.textContent == "" && ganhou == false){
            event.target.textContent = play;
            if (play === 'X') {
                play = 'O';
            } else {
                play = 'X';
            }
        }
        
    }
    cells.forEach((cell, i) => {
        tabuleiro[i] = cell;
        if(cell.textContent == "X"){
            cell.style.color = "red";
        }else if(cell.textContent == "O"){
            cell.style.color = "blue";
        }
        console.log(cell);
    });
    tabuleiro = tabuleiro.map((e)=>e.textContent);
    console.log("")
    verificaVitoria();
});

function verificaVitoria() {
    if(tabuleiro[1 - 1] == "X" && tabuleiro[2 - 1] == "X" && tabuleiro[3 - 1] == "X" || 
       tabuleiro[1 - 1] == "O" && tabuleiro[2 - 1] == "O" && tabuleiro[3 - 1] == "O"){
        alert("Vitória do Jogador " + tabuleiro[1 - 1]);
        ganhou = true;
    }else if(tabuleiro[4 - 1] == "X" && tabuleiro[5 - 1] == "X" && tabuleiro[6 - 1] == "X" || 
             tabuleiro[4 - 1] == "O" && tabuleiro[5 - 1] == "O" && tabuleiro[6 - 1] == "O"){
        alert("Vitória do Jogador " + tabuleiro[4 - 1]);
        ganhou = true;
    }else if(tabuleiro[7 - 1] == "X" && tabuleiro[8 - 1] == "X" && tabuleiro[9 - 1] == "X" || 
             tabuleiro[7 - 1] == "O" && tabuleiro[8 - 1] == "O" && tabuleiro[9 - 1] == "O"){
        alert("Vitória do Jogador " + tabuleiro[7 - 1]);
        ganhou = true;
    }else if(tabuleiro[1 - 1] == "X" && tabuleiro[4 - 1] == "X" && tabuleiro[7 - 1] == "X" || 
             tabuleiro[1 - 1] == "O" && tabuleiro[4 - 1] == "O" && tabuleiro[7 - 1] == "O"){
        alert("Vitória do Jogador " + tabuleiro[1 - 1]);
        ganhou = true;
    }else if(tabuleiro[2 - 1] == "X" && tabuleiro[5 - 1] == "X" && tabuleiro[8 - 1] == "X" || 
             tabuleiro[2 - 1] == "O" && tabuleiro[5 - 1] == "O" && tabuleiro[8 - 1] == "O"){
        alert("Vitória do Jogador " + tabuleiro[2 - 1]);
        ganhou = true;
    }else if(tabuleiro[3 - 1] == "X" && tabuleiro[6 - 1] == "X" && tabuleiro[9 - 1] == "X" || 
             tabuleiro[3 - 1] == "O" && tabuleiro[6 - 1] == "O" && tabuleiro[9 - 1] == "O"){
        alert("Vitória do Jogador " + tabuleiro[3 - 1]);
        ganhou = true;
    }else if(tabuleiro[1 - 1] == "X" && tabuleiro[5 - 1] == "X" && tabuleiro[9 - 1] == "X" || 
             tabuleiro[1 - 1] == "O" && tabuleiro[5 - 1] == "O" && tabuleiro[9 - 1] == "O"){
        alert("Vitória do Jogador " + tabuleiro[1 - 1]);
        ganhou = true;
    }else if(tabuleiro[3 - 1] == "X" && tabuleiro[5 - 1] == "X" && tabuleiro[7 - 1] == "X" || 
             tabuleiro[3 - 1] == "O" && tabuleiro[5 - 1] == "O" && tabuleiro[7 - 1] == "O"){
        alert("Vitória do Jogador " + tabuleiro[3 - 1]);
        ganhou = true;
    }
}
