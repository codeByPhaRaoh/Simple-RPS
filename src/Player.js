class Player {
    constructor(name) {
        this.name = name;
        this.play = null; // initialize the play to null
    }

    setPlay(play) {
        // set the player's play
        this.play = play;
    }
}

export default Player;
