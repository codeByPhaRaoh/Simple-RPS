import chai from "chai";
import chaiHttp from 'chai-http';
// import app from '../app.js';
import Player from '../src/Player.js';

const { expect } = chai;

chai.use(chaiHttp);

describe('Player', () => {
    describe('setPlay', () => {
        it('should set the play property (weapon) of the player', () => {
            const player = new Player('Pierre');
            player.setPlay('rock');
            // eslint-disable-next-line jest/valid-expect
            expect(player.play).to.equal('rock');
        });
    });
});
