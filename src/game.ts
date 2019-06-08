import "phaser";

const config: Phaser.Types.Core.GameConfig = {
    title: "Rage Dash",
    width: 800,
    height: 600,
    parent: "game",
    backgroundColor: "#18216D" 
};

export class RageDashGame extends Phaser.Game {
    constructor(config: Phaser.Types.Core.GameConfig) {
        super(config);
    }
}

window.onload = () => {
    var game = new RageDashGame(config);
};