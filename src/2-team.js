
class Player {
  constructor(name, position, jerseyNumber) {
    this.name = name;
    this.position = position;
    this.jerseyNumber = jerseyNumber;
  }
}

class Team {
  #starters = [];
  #bench = [];

  constructor(name) {
    this.name = name;
  }

  getStarters() {
    return this.#starters;
  }

  getBench() {
    return this.#bench;
  }

  addBenchPlayer(player) {
    this.#bench.push(player);
  }

  getPlayerCount() {
    return this.#starters.length + this.#bench.length;
  }

  moveToBench(name) {
    for (let i = 0; i < this.#starters.length; i++) {
      if (this.#starters[i].name === name) {
        const player = this.#starters.splice(i, 1)[0];
        this.#bench.push(player);
        return true;
      }
    }
    return false;
  }

  moveToStarters(name) {
    for (let i = 0; i < this.#bench.length; i++) {
      if (this.#bench[i].name === name) {
        const player = this.#bench.splice(i, 1)[0];
        this.#starters.push(player);
        return true;
      }
    }
    return false;
  }
}

module.exports = { Player, Team };
