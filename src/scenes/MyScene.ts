import 'phaser';

export class MyScene extends Phaser.Scene {

  /*
   * Add listeners for input.
   */
  public create() {
    this.input.keyboard.on('keydown', (event: KeyboardEvent) => this.keyPress(event.key));
    this.input.on('pointerdown', () => this.clickHandler());
  }

  /*
   * Workaround for loading a new scene.
   */
  protected loadNewScene(_key: string, _class: any) {
    this.scene.stop(this.scene.key);
    this.scene.remove(this.scene.key);

    this.scene.add(_key, _class, false);
    this.scene.start(_key);
  }

  /*
   * Let scenes determine where to pass keyboard input.
   */
  protected keyPress(k: string) { }

  /*
   * The scene has been clicked.
   */
  protected clickHandler() { }

}