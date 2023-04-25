import "phaser";

new Phaser.Game({
    type: Phaser.AUTO,
    backgroundColor: "#000",
    width: 256,
    height: 240,
    scene: {
        create
    }
});

function create()
{
    this.add.text(10, 10, "Hello, world!");
}
