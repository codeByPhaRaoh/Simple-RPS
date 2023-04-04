import express from "express";
import Player from "../src/Player.js";
import RPS from "../src/RPS.js";

export const router = express.Router();

router.get('/', (req, res) => {
    res.render('game');
});

router.post('/', (req, res) => {
    const player1 = new Player(req.body.name);
    const player2 = new Player('Computer');
    const game = new RPS(player1, player2);
    // player1.setPlay(req.body.play);
    // player2.setPlay(game.generateComputerPlay());
    const result = game.play(req.body.play);
    res.render('result', { result });
});
