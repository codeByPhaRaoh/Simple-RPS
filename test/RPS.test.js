/* The reason sinon.stub was used here was because I was having an issue where calling the play() function would cause the computer to generate a random 
weapon so I was having issues testing it. After looking on the internet, using sinon.stub to generate a computer result that would be used seemed to work*/

/* eslint-disable jest/valid-expect */
import chai from "chai";
import chaiHttp from "chai-http";
import sinon from "sinon";
import RPS from "../src/RPS.js";

chai.use(chaiHttp);

const expect = chai.expect;
// const apiUrl = "http://localhost:3000";

describe("RPS", function () {
    describe("play", function () {
        it("should say that the computer won if the player plays a losing move", function () {
            const player1Name = "Pierre";
            const player1Play = "rock";
            const player2Play = "paper";
            const rps = new RPS(player1Name);

            // Stub out generateComputerPlay to always return "paper"
            sinon.stub(rps, "generateComputerPlay").returns("paper");

            rps.player1.setPlay(player1Play);
            rps.player2.setPlay(player2Play);

            const result = rps.play();
            expect(result).to.equal("Computer wins!");

            // Restore generateComputerPlay
            rps.generateComputerPlay.restore();
        });

        it("should say that the player won if the player plays a winning move", function () {
            const player1Name = "Pierre";
            const player1Play = "rock";
            const player2Play = "scissors";
            const rps = new RPS(player1Name);

            // Stub out generateComputerPlay to always return "scissors"
            sinon.stub(rps, "generateComputerPlay").returns("scissors");

            rps.player1.setPlay(player1Play);
            rps.player2.setPlay(player2Play);

            const result = rps.play();
            expect(result).to.equal("Pierre wins!");

            // Restore generateComputerPlay
            rps.generateComputerPlay.restore();
        });

        it("should end in a tie if both players play the same move", function () {
            const player1Name = "Pierre";
            const player1Play = "rock";
            const player2Play = "rock";
            const rps = new RPS(player1Name);

            // Stub out generateComputerPlay to always return "rock"
            sinon.stub(rps, "generateComputerPlay").returns("rock");

            rps.player1.setPlay(player1Play);
            rps.player2.setPlay(player2Play);

            const result = rps.play();
            expect(result).to.equal("tie");

            // Restore generateComputerPlay
            rps.generateComputerPlay.restore();
        });
    });

    describe("generateComputerPlay", () => {
        it("should return rock, paper, or scissors", () => {
            const game = new RPS("Player 1");
            const play = game.generateComputerPlay();
            expect(play).to.be.oneOf(["rock", "paper", "scissors"]);
        });

        it("should generate a random play (weapon) for the computer", () => {
            const rps = new RPS("Player 1");
            const computerPlay = rps.generateComputerPlay();
            const plays = ["rock", "paper", "scissors"];
            expect(plays.includes(computerPlay)).to.equal(true);
        });
    });

});
