const player1 = {
    name: 'Mario',
    velocidade: 4,
    manobrabilidade: 3,
    poder: 3,
    pontos: 0,
};
const player2 = {
    name: 'Luigi',
    velocidade: 3,
    manobrabilidade: 4,
    poder: 4,
    pontos: 0,
}
async function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
}

async function playRaceEngine(character1, character2){
    let round = 1;
    while(character1.pontos < 3 && character2.pontos < 3){
        console.log(`🏁 Rodada ${round} 🏁`);
        const roll1 = await rollDice();
        const roll2 = await rollDice();

        console.log(`🎲 ${character1.name} rolou ${roll1}`);
        console.log(`🎲 ${character2.name} rolou ${roll2}`);

        if(roll1 > roll2){
            character1.pontos++;
            console.log(`🏆 ${character1.name} venceu a rodada!`);
        } else if(roll2 > roll1){
            character2.pontos++;
            console.log(`🏆 ${character2.name} venceu a rodada!`);
        } else {
            console.log(`🤝 Empate!`);
        }

        console.log(`🏆 Placar: ${character1.name} ${character1.pontos} x ${character2.pontos} ${character2.name}\n`);
        round++;
    }

    if(character1.pontos > character2.pontos){
        console.log(`🏆🎉 ${character1.name} venceu a corrida! 🎉🏆`);
    } else {
        console.log(`🏆🎉 ${character2.name} venceu a corrida! 🎉🏆`);
    }
}

(async function main(){
    console.log(
        `🏁🚨 Corrida entre ${player1.name} e ${player2.name} começando... \n`

    );
    await playRaceEngine(player1, player2);
})();