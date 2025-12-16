// Problem 2: Composition - Team and Player
// Implement your Player and Team classes below

class Player {
    constructor(name, position, jerseyNumber){
        this.name = name
        this.position = position
        this.jerseyNumber = jerseyNumber
    }
}

class Team {
    #starters = []
    #bench = []
    
    constructor(name){
        this.name = name
    }
    get getStarter(){
        return this.#starters
    }

    get getBench(){
        return this.#bench
    }
    addBenchPlayer(player){
        this.#bench.push(player)
    }
    getPlayerCount(){
        return this.#starters.length + this.#bench.length
    }
    moveToBench(name){
        
    }
}

module.exports = { Player, Team };

