/// klasa, która zawiera dane wszytskich plansz gry oraz podstawowych ustawień
class Levels {
  constructor() {
    this.scorePoints = 0;
    this.robboLives = 3;
    this.gameSpeed = 150;
    this.canMove = false;
    this.canMoveSetTime;
    this.activeMagnet = null;
    this.spaceShot = false;
    this.mobileMoveInterval;

    this.levelCounter = 1;
    this.lastLevel = 1;
    // level 1

    this.level1 = [31, 16];
    this.level1part1 = [...`2222222222222222`];
    this.level1part2 = [...`2Y2 2Y2 2Y2 2 O2`];
    this.level1part3 = [...`2 2 2 2 2 2 2  2`];
    this.level1part4 = [...`2 2 I 2 I 2 2  2`];
    this.level1part5 = [...`2 2 2 2 2 2 2  2`];
    this.level1part6 = [...`2I2 2 2 2 2 2 #2`];
    this.level1part7 = [...`2 2 2 2 2 2 I  P`];
    this.level1part8 = [...`2 2 2 2 2 2 2  2`];
    this.level1part9 = [...`2 2 2 2 2 2 2 #2`];
    this.level1part10 = [...`2 2 2 2 2 2 2  2`];
    this.level1part11 = [...`2 2 2 2 2 2 2  P`];
    this.level1part12 = [...`2 I 2 I 2 I 2 #2`];
    this.level1part13 = [...`2 2 2 2 2 2 2 @2`];
    this.level1part14 = [...`2 2X2 2X2 2X2  2`];
    this.level1part15 = [...`2222222222222  2`];
    this.level1part16 = [...`2$22I22 22M22  2`];
    this.level1part17 = [...`2M22M22 22 22  2`];
    this.level1part18 = [...`2 22 22I22 22  2`];
    this.level1part19 = [...`2 22 22M22 22  2`];
    this.level1part20 = [...`2 22    22 22  2`];
    this.level1part21 = [...`2 22 22 22 22  2`];
    this.level1part22 = [...`2 22 22    22  2`];
    this.level1part23 = [...`2 22 22 22 22  2`];
    this.level1part24 = [...`2 22 22 22     2`];
    this.level1part25 = [...`2 22 22 22 22  2`];
    this.level1part26 = [...`2    22 22I22  2`];
    this.level1part27 = [...`2 22 22 22 22  2`];
    this.level1part28 = [...`2I22 22 22 22  2`];
    this.level1part29 = [...`2 22 22 22 22  2`];
    this.level1part30 = [...`2 22 22 22 22  2`];
    this.level1part31 = [...`2222 22222222222`];

    // this.level1 = [10, 10];
    // this.level1part1 = [...`2222222222`];
    // this.level1part2 = [...`2@    AA 2`];
    // this.level1part3 = [...`2        2`];
    // this.level1part4 = [...`2        2`];
    // this.level1part5 = [...`2    B   2`];
    // this.level1part6 = [...`2   j    2`];
    // this.level1part7 = [...`2        2`];
    // this.level1part8 = [...`2        2`];
    // this.level1part9 = [...`2       $2`];
    // this.level1part10 = [...`2222222222`];

    // level 2
  }
}

// @ - robbo-
// $ - ship-
// # - hash simple-
// % - hash mobile-
// ? - ?                         *
// 1 - first border-
// 2- second border-
// 3 - third border-
// 4 - fourth border-
// A - ammo-
// B - bomb-
// C - black hole – empty space-
// D - door-
// E - eyes                      *
// F - key-
// G - live-
// H - bench-                     *
// I - screw - suggest max 99-
// J - wall-
// K - ant - left-
// L - beetle - right-
// M - bird vertical, no shot-
// N - bird horiontal, no shot-
// O - bird horiontal, single shot-
// P - magnet left-
// Q - magnet right-
// R - gun - shot right – single-
// S - gun - shot left – single-
// T - gun - shot up – single-
// U - gun - shot down – single-
// V - gun - shot right – laser-
// W - gun - shot left – laser-
// X - gun - shot up – laser-
// Y - gun - shot down – laser-
// Z - gun - shot right – single, moving up-down-
// a - gun - shot left – single, moving up-down-
// b - gun - shot up – single, moving up-down-
// c - gun - shot down – single, moving up-down-
// d - gun - shot right – burner-
// e - gun - shot left – burner-
// f - gun - shot up – burner-
// g - gun - shot down – burner-
// h - gun - shot down – rotate, single shot-
// teleport - use as a pair or just one - max 10 pair   *
//
// j - teleport A0 - 0A
// k - teleport 0A - A0
// l - teleport A1 - 1A
// m - teleport 1A - A1
// n - teleport A2 - 2A
// o - teleport 2A - A2
// p - teleport A3 - 3A
// q - teleport 3A - A3
// r - teleport A4 - 4A
// s - teleport 4A - A4
// t - teleport A5 - 5A
// u - teleport 5A - A5
// v - teleport A6 - 6A
// w - teleport 6A - A6
// x - teleport A7 - 7A
// y - teleport 7A - A7
// z - teleport A8 - 8A
// , - teleport 8A - A8
// . - teleport A9 - 9A
// - - teleport 9A - A9
