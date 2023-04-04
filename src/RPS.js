import Player from "./Player.js";

class RPS {
    constructor(player1, player2 = "Computer") {
        this.player1 = player1;
        this.player2 = player2;
    }


    play(player1Weapon) {
        // get the players' plays
        this.player1.play = player1Weapon;
        this.player2.play = this.generateComputerPlay();

        // // set the computer's play
        // if (this.player2.name === "Computer") {
        //     player2Play = this.generateComputerPlay();
        //     this.player2.setPlay(player2Play);
        // }

        // determine the winner
        let result;

        if (this.player1.play === this.player2.play) {
            result = "tie";
        } else if (
            (this.player1.play === "rock" && this.player2.play === "scissors") ||
            (this.player1.play === "paper" && this.player2.play === "rock") ||
            (this.player1.play === "scissors" && this.player2.play === "paper")
        ) {
            result = `${this.player1.name} wins!`;
        } else {
            result = `${this.player2.name} wins!`;
        }
        return result;
    }


    generateComputerPlay() {
        const plays = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * 3);

        return plays[randomIndex];
    }
}

export default RPS;

    // Some of the code here was left in as it will be used for when I come back to work on it (post-submission) to make it multiplayer
