export class Connect4 {
  container: number[][];
  gameFinished: boolean;
  player: number;

  constructor() {
    this.container = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    this.gameFinished = false;
    this.player = 0;
  }

  play(col: number): string {
    if (this.gameFinished) return "Game has finished!";

    if (this.player !== 1) {
      this.player = 1;
    } else this.player = 2;

    let row = 0;

    for (let i = 5; i >= 0; i--) {
      if (this.container[0][col] !== 0) {
        return "Column full!";
      }
      if (this.container[i][col] === 0) {
        this.container[i][col] = this.player;
        row = i;
        break;
      }
    }
    return this.checkWinner(row, col);
  }

  checkWinner(row: number, col: number) {
    // checking column
    if (
      row < 3 &&
      this.container[row][col] === this.player &&
      this.container[row + 1][col] === this.player &&
      this.container[row + 2][col] === this.player &&
      this.container[row + 3][col] === this.player
    ) {
      this.gameFinished = true;
      return `Player ${this.player} wins!`;
    }

    // checking row
    for (let i = 0; i < 4; i++) {
      if (
        this.container[row][i] === this.player &&
        this.container[row][i + 1] === this.player &&
        this.container[row][i + 2] === this.player &&
        this.container[row][i + 3] === this.player
      ) {
        this.gameFinished = true;
        return `Player ${this.player} wins!`;
      }
    }

    //checking top-left to bottom-right
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        if (
          this.container[j][i] === this.player &&
          this.container[j + 1][i + 1] === this.player &&
          this.container[j + 2][i + 2] === this.player &&
          this.container[j + 3][i + 3] === this.player
        ) {
          this.gameFinished = true;
          return `Player ${this.player} wins!`;
        }
      }
    }

    //checking bottom-left to top-right
    for (let i = 0; i < 4; i++) {
      for (let j = 5; j > 2; j--) {
        if (
          this.container[j][i] === this.player &&
          this.container[j - 1][i + 1] === this.player &&
          this.container[j - 2][i + 2] === this.player &&
          this.container[j - 3][i + 3] === this.player
        ) {
          this.gameFinished = true;
          return `Player ${this.player} wins!`;
        }
      }
    }

    return this.player === 1 ? "Player 1 has a turn" : "Player 2 has a turn";
  }
}
