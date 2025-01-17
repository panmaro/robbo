/// klasa, która zawiera dane wszytskich plansz gry oraz podstawowych ustawień
class Levels {
  constructor() {
    this.scorePoints = 0;
    this.robboLives = 5;
    this.gameSpeed = 150;
    this.canMove = false;
    this.canMoveSetTime;
    this.activeMagnet = null;
    this.spaceShot = false;
    this.mobileMoveInterval;
    this.levelCounter = 1;
    this.lastLevel = 9;
    this.boardColorCounter = 0;
    this.oneKillRobbo = true;
    this.boardColor = [
      "rgb(34, 87, 34)",
      "rgb(25, 52, 109)",
      "rgb(109, 107, 25)",
      "rgb(102, 25, 109)",
      "rgb(25, 109, 91)",
      "rgb(109, 70, 25)",
    ];

    // level do testów
    //     this.level1 = [
    //       [...`11111111111111`],
    //       [...`1 @    A     1`],
    //       [...`1            1`],
    //       [...`1$            `],
    //       [...`       N      `],
    //       [...`1            1`],
    //       [...`       N      `],
    //     ];

    // level 1
    this.level1 = [
      [...`1111111111111111`],
      [...`1   1   1I 1   1`],
      [...`1 @ 1 j 11 1 k 1`],
      [...`1 1 1    1 1   1`],
      [...`1 # 11 #   1 1 1`],
      [...`1    1 11111 1 1`],
      [...`1A   1  1  J 1 1`],
      [...`1111 1I#1  J 1 1`],
      [...`1B   11 1  J 1 1`],
      [...`1    1  1 1111 1`],
      [...`1    1I 1   1Y 1`],
      [...`1  11111111 1  1`],
      [...`1    1    D 1  1`],
      [...`1 B  1 #  111  1`],
      [...`1    11 111A   1`],
      [...`1    1    111 11`],
      [...`1# B#1   # 1# #1`],
      [...`1# ##  ##  1   1`],
      [...`1###    ##11   1`],
      [...`1F# ## #I 1    1`],
      [...`11111111111#11 1`],
      [...`1   1     1 F1D1`],
      [...`V     I   1 11 1`],
      [...`1   1   #      1`],
      [...`1 ? 1#11111 1 11`],
      [...`1     1I   #   1`],
      [...`11111 11111 1 11`],
      [...`1   1 1   1 1111`],
      [...`1 $     I 1    1`],
      [...`1   1 1   1   I1`],
      [...`1111111111111111`],
    ];
    // level 2

    this.level2 = [
      [...`2222222222222222`],
      [...`2   2  2  #    2`],
      [...`2 ? 2  2   # @ 2`],
      [...`2 F J# J #     S`],
      [...`2   2 #2   #  #2`],
      [...`2222222222222D22`],
      [...`2   # #        2`],
      [...`2 #  I #  #  I 2`],
      [...`2  #     #     2`],
      [...`2JJJ#   22222222`],
      [...`2 #  ####   #  2`],
      [...`2  I       # # 2`],
      [...`2222222222222  2`],
      [...`2I     2   2   2`],
      [...`2  222  L2   222`],
      [...`2 22 2222222   2`],
      [...`2  2   2   222 2`],
      [...`2#   2   2 2   2`],
      [...`2222 22222   222`],
      [...`2    2   2 2   2`],
      [...`2# 2$2 I 2 2  #2`],
      [...`2 #222    # # I2`],
      [...`2 22    # 22   2`],
      [...`2     2   2I # 2`],
      [...`22 22222222#   2`],
      [...`2        S2    2`],
      [...`22 222222222JJ22`],
      [...`2# 2   #2A2    2`],
      [...`2# 2 I  2 2 II 2`],
      [...`2     #   2    2`],
      [...`2222222222222222`],
    ];

    // level3
    this.level3 = [
      [...`3333333333333333`],
      [...`3    3   #3    3`],
      [...`3 @  D    3  I 3`],
      [...`3    3 I  ##   3`],
      [...`3    3    3##  3`],
      [...`3    33333333333`],
      [...`3  B 3   #3    3`],
      [...`3    3    3  I 3`],
      [...`3    #  j 3    3`],
      [...`3#   3    3   #3`],
      [...`333333333333D333`],
      [...`CCCCCCCCCC3   #3`],
      [...`C33333333C3 k  3`],
      [...`C3?    #3C3    3`],
      [...`C3   I  3C3    3`],
      [...`C3      3C333 33`],
      [...`C3 m  F 3C3 ## 3`],
      [...`C3      3C3 I  3`],
      [...`C33333333C3# # 3`],
      [...`CCCCCCCCCC3  #F3`],
      [...`33333333333 3333`],
      [...`3I        3    3`],
      [...`333 3 3     33 3`],
      [...`3    $    3 #L 3`],
      [...`3 3M3 3   3 33 3`],
      [...`3 3  N    3  # 3`],
      [...`3 3 3333333 33 3`],
      [...`3 3 3     3    3`],
      [...`3 3 3 3 A 3333 3`],
      [...`3     3   3l   3`],
      [...`3333333333333333`],
    ];

    // level 4
    this.level4 = [
      [...`1111111111111111`],
      [...`1  # N      #  1`],
      [...`1j            I1`],
      [...`111          111`],
      [...`1   CC CC CC   1`],
      [...`1   CC CC CC   1`],
      [...`1   CC CC CC   1`],
      [...`1   CC CC CC   1`],
      [...`1 I CC CC CC I 1`],
      [...`1  CCCLCC CCC  1`],
      [...`1 CCC  CC  CCC 1`],
      [...`1CCC   CC   CCC1`],
      [...`1              1`],
      [...`111V        l111`],
      [...`1              1`],
      [...`1 11111111111111`],
      [...`1      G1 Y   k1`],
      [...`111111111      1`],
      [...`1       1      1`],
      [...`1 11111 1     W1`],
      [...`1 Y   1 D      1`],
      [...`1   @ 1111111111`],
      [...`1     1    L   1`],
      [...`1  1111   111  1`],
      [...`1I F1m1   I1   1`],
      [...`11 11 1        1`],
      [...`1  I1 1        1`],
      [...`11111#1        1`],
      [...`1     1    I1K 1`],
      [...`1 $ 1 1    111 1`],
      [...`1       ?      1`],
      [...`1111111111111111`],
    ];

    // level 5
    this.level5 = [
      [...`5555555555555555`],
      [...`5      L      @5`],
      [...`5    I5555I    5`],
      [...`5  5555  5555  5`],
      [...`5  5           5`],
      [...`5  5           5`],
      [...`5  55   I      5`],
      [...`5           5  5`],
      [...`5           5  5`],
      [...`5  5555IK5555  5`],
      [...`5    I5555I    5`],
      [...`5              5`],
      [...`55555555 5555555`],
      [...`5I 55I     55I$5`],
      [...`5  55      55  5`],
      [...`5  ##  55 #55# 5`],
      [...`5  ##  55  55  5`],
      [...`5  55          5`],
      [...`5XI55X    #   X5`],
      [...`5555555  55  555`],
      [...`5555555  55  555`],
      [...`5 B    # 55    5`],
      [...`5        55    5`],
      [...`5555555555555# 5`],
      [...`5555555555555  5`],
      [...`5I 5U5Y5Y5U5   5`],
      [...`5              5`],
      [...`5    5 I     # 5`],
      [...`5    5 5 5   I 5`],
      [...`5              5`],
      [...`5555555555555555`],
    ];
    // level 6
    this.level6 = [
      [...`777777x777z77CCC`],
      [...`7#  7   7   7CCC`],
      [...`7 @ j # 7 ? tCCC`],
      [...`7   7   7   7CCC`],
      [...`77-777o777w77777`],
      [...`CCC7   7   7   7`],
      [...`CCCv F k J u F r`],
      [...`CCC7   7   7   7`],
      [...`CCC7777s7l7n7.77`],
      [...`CCCCC7   7   7CC`],
      [...`777777 B q 7 mCC`],
      [...`7y   7   7   7CC`],
      [...`7    77777777777`],
      [...`7  ? 7   D     7`],
      [...`7    D  W7 777 7`],
      [...`7777777777 777 7`],
      [...`7        #     7`],
      [...`7 $N      #    7`],
      [...`7        #     7`],
      [...`7777777777777777`],
      [...`CCCCCCCCCCCCCCCC`],
      [...`CCCCCCCCCCCCCCCC`],
      [...`CCCCCCCCCCCCCCCC`],
      [...`CCCCCCCCCCCCCCCC`],
      [...`CCCCCCCCCCCCCCCC`],
      [...`CCCCCCCCCCCCCCCC`],
      [...`CCCCCCCCCCCCCCCC`],
      [...`7777777777777777`],
      [...`7p            I7`],
      [...`7777JJ7777#77777`],
    ];

    // level 7
    this.level7 = [
      [...`8888888888888888`],
      [...`88888j  8888   8`],
      [...`8888888    D I 8`],
      [...`8   888 8888   8`],
      [...`8 I D   88888888`],
      [...`8   888 8888   8`],
      [...`8888888    D I 8`],
      [...`888888888 88   8`],
      [...`888888    888888`],
      [...`888888  88888888`],
      [...`888888  88888888`],
      [...`88888  K 8888888`],
      [...`8888  88  888888`],
      [...`888  8888  88888`],
      [...`88  888888  8888`],
      [...`8F            88`],
      [...`8888888888888  8`],
      [...`8I8           88`],
      [...`8 Y8    N    8 8`],
      [...`8   8       8 F8`],
      [...`8   Y8     8#  8`],
      [...`8     88#888 ##8`],
      [...`8#    8   8 #  8`],
      [...`8#    # @ #  # 8`],
      [...`8#    8   8 # #8`],
      [...`8     88#88  ##8`],
      [...`8    8#    8  #8`],
      [...`8  X8##B    8B 8`],
      [...`8  8JBBJJJJ#   S`],
      [...`8I8$#J#BF #  BB8`],
      [...`8888888888888888`],
    ];

    // level 8
    this.level8 = [
      [...`1111111111111111`],
      [...`1K L KKKLLKLKLK1`],
      [...`1JJJJJJJJJJJJJJ1`],
      [...`1%  % %   %   I1`],
      [...`1  %   %    J  1`],
      [...`1%% %%   %%    1`],
      [...`1  %% %b%  %   1`],
      [...`1I%   %   %  1 1`],
      [...`1  %%%   %  #  1`],
      [...`11X B X1X1X1@ M1`],
      [...`1111B1111111J111`],
      [...`1A  BB1LJI %%  1`],
      [...`1    B1KJ  % % W`],
      [...`1  J B1LJ %    W`],
      [...`1  1 B2LJ  % B 1`],
      [...`1    B1 J % 1  1`],
      [...`1 N  B1KJ  %   W`],
      [...`1 1  B1LJ%%  I 1`],
      [...`1M   B1KJ  #%  W`],
      [...`1I   BBLJ    % 1`],
      [...`111D11B1111%1111`],
      [...`1   1BBBKJ%   I1`],
      [...`1 G 1BL1LJ B%  W`],
      [...`1   1BK1KJ   % W`],
      [...`1   BJL1LJ %   W`],
      [...`1  1BJK1KJ  #% 1`],
      [...`1  1BJL1 J %   W`],
      [...`1  1BJK1LJ % %%1`],
      [...`1   BJK1LJ % %%1`],
      [...`1$  BJI1KJ     1`],
      [...`1111111111111111`],
    ];

    // level9

    this.level9 = [
      [...`2222222222222222`],
      [...`2Y2 2Y2 2Y2 2 O2`],
      [...`2 2 2 2 2 2 2  2`],
      [...`2 2 I 2 I 2 2  2`],
      [...`2 2 2 2 2 2 2  2`],
      [...`2I2 2 2 2 2 2 #2`],
      [...`2 2 2 2 2 2 I  P`],
      [...`2 2 2 2 2 2 2  2`],
      [...`2 2 2 2 2 2 2 #2`],
      [...`2 2 2 2 2 2 2  2`],
      [...`2 2 2 2 2 2 2  P`],
      [...`2 I 2 I 2 I 2 #2`],
      [...`2 2 2 2 2 2 2 @2`],
      [...`2 2X2 2X2 2X2  2`],
      [...`2222222222222  2`],
      [...`2$22I22 22M22  2`],
      [...`2M22M22 22 22  2`],
      [...`2 22 22I22 22  2`],
      [...`2 22 22M22 22  2`],
      [...`2 22    22 22  2`],
      [...`2 22 22 22 22  2`],
      [...`2 22 22    22  2`],
      [...`2 22 22 22 22  2`],
      [...`2 22 22 22     2`],
      [...`2 22 22 22 22  2`],
      [...`2    22 22I22  2`],
      [...`2 22 22 22 22  2`],
      [...`2I22 22 22 22  2`],
      [...`2 22 22 22 22  2`],
      [...`2 22 22 22 22  2`],
      [...`2222 22222222222`],
    ];
  }
}

// @ - robbo-
// $ - ship-
// + - new ship, dont use, only for eye class
// # - hash simple-
// % - hash mobile-
// ? - ?
// 1 - first border-
// 2- second border-
// 3 - third border-
// 4 - fourth border-
// A - ammo-
// B - bomb-
// C - black hole – empty space-
// D - door-
// E - eye
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
// teleport - use as a pairs or just one - max 10 pairs
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
