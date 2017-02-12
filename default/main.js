//Load Roles
var deathCreeps = require('role.manageDeathCreeps');
var spawnCreeps = require('role.manageSpawnCreeps');
var roleHarvester = require('role.harvester');

// Consts
var ROLE_HARVESTER = "harvester";

// Main Loop
module.exports.loop = function () {

    deathCreeps.run();

    spawnCreeps.run(ROLE_HARVESTER);
    
    for(var indx in Game.creeps) {
        var creep = Game.creeps[indx];
        if(creep.memory.role == ROLE_HARVESTER) {
            roleHarvester.run(creep);
        }
    }
    
}