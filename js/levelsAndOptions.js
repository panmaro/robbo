/// klasa, która zawiera dane wszytskich plansz gry oraz podstawowych ustawień
class Levels {
  constructor() {
    this.scorePoints = 0;
    this.robboLives = 3;
    this.gameSpeed = 250;
    this.canMove = true;
    this.canMoveSetTime;
    this.activeMagnet = null;
    this.spaceShot=false;

    this.levelCounter = 1;
    this.lastLevel = 1;
    // level 1

    this.level1 = [26, 11];
    this.level1part1 = [...`           `];
    this.level1part2 = [...`&#         `];
    this.level1part3 = [...`   A#     *`];
    this.level1part4 = [...`A#         `];
    this.level1part5 = [...`           `];
    this.level1part6 = [...`           `];
    this.level1part7 = [...`           `];
    this.level1part8 = [...`           `];
    this.level1part9 = [...`           `];
    this.level1part10 = [...`           `];
    this.level1part11 = [...`           `];
    this.level1part12 = [...`           `];
    this.level1part13 = [...`           `];
    this.level1part14 = [...`           `];
    this.level1part15 = [...`           `];
    this.level1part16 = [...`           `];
    this.level1part17 = [...`           `];
    this.level1part18 = [...`           `];
    this.level1part19 = [...`           `];
    this.level1part20 = [...`           `];
    this.level1part21 = [...`           `];
    this.level1part22 = [...`           `];
    this.level1part23 = [...`           `];
    this.level1part24 = [...`           `];
    this.level1part25 = [...`         @ `];
    this.level1part26 = [...`CCCCCCCCCCC`];

    // level 2
  }
}
// A – ammo
// B – bomb
// C - wall
// D – door
// E - gun - shot right – single
// e - gun - shot right – laser
// F - gun - shot left – single
// f - gun - shot left – laser
// G - gun – shot up – single
// g - gun - shot up – laser
// H - gun - shot down – single
// h - gun - shot down – laser
// I – gun - shot right - burner *
// i - gun - shot right – single, moving up-down
// J - gun - shot left - burner *
// j - gun - shot left – single, moving up-down
// K – gun - shot up - burner *
// k - gun - shot up – single, moving left-right
// L – gun - shot down - burner *
// l - gun - shot down – single, moving left-right
// M - gun - shot down – rotate, single shot
// N - ant - left
// O - beetle - right
// P – bird vertical, no shot
// Q - bird horiontal, no shot
// q - bird horiontal, single shot
// R –
// S –
// T -
// U –
// V -
// W -
// X – black hole – empty space
// Y –
// Z –
// ! – live
//@ - robbo
// # - hash
// $ - sliding hash
// % - screw
// ^ - key
// & - ship
// * - border
// ( -
// ) –
// - -
// _ -
// + -
// = -
// < - magnet right
// > - magnet left