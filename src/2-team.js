// Problem 2: Composition - Team and Player
// Implement your Player and Team classes below

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
  get getStarters() {
    return this.#starters;
  }

  get getBench() {
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
        const player = this.#starters.splice(name);
        this.#bench.push(Player);
        return true;
      }
    }
    return false;
  }
  moveToStarters(name){
    for (let i = 0; i < this.#bench.length; i ++){
      if(this.#bench[i].name === name){
        const benchPlayer = this.#bench.splice(name)
          this.#bench.push(Player)
          return true
      }
    }
    return false
  }
}

module.exports = { Player, Team };
