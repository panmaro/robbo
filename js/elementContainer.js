// klasa która przecgowuje wszytskie aktualne elementy wyświetlające się na stronie
class ElemenntContainer {
  constructor() {
    this.screws = 0;
    this.birdHorizontal = 0;
    this.birdVertical = 0;
    this.hash = 0;
      this.makeShotName;
    this.shotNumber=0
    this.ammo = 0;
    this.border = 0;
    this.lives = 0;
    this.keys = 0;
    this.bombs = 0;
    this.gunUp = 0;
    this.gunDown = 0;
    this.gunLeft = 0;
    this.gunRight = 0;
    this.magnetRight = 0;
    this.magnetLeft = 0;
    this.ship = 0;
    this.ant = 0;
    this.beetle = 0;
    this.wall = 0;
    this.door = 0;
    this.objects = [];
    this.staticObjects = ["board.elementContainer", "board.scoreBoard"];
    this.explosionAnim = [
      "",
      "url(pictures/boom1.png)",
      "url(pictures/boom2.png)",
      "url(pictures/boom3.png)",
      "url(pictures/boom4.png)",
      "url(pictures/boom5.png)",
      "url(pictures/boom6.png)",
      "url(pictures/boom7.png)",
      "",
    ];
  }
  deleteNameObjects(startName) {
    for (let i = 0; i < this.objects.length; i++) {
      if (this.objects[i] == startName) {
        this.objects.splice(i, 1);
      }
    }
  }
  nextLevel() {
    this.screws = 0;
    this.birdHorizontal = 0;
    this.birdVertical = 0;
    this.hash = 0;
    this.autoHash = 0;
    this.ammo = 0;
    this.wall = 0;
    this.objects = [];
  }
}
