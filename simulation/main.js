//Load Roles
var roleHarvester = require('role.harvester');
var manageCreeps = require('role.manageCreeps');
var ROLE_HARVESTER = "harvester";

// Main Loop
module.exports.loop = function () {

    manageCreeps.deleteCreep();

    manageCreeps.run(ROLE_HARVESTER, false);
    
    
    
    
    for(var indx in Game.creeps) {
        var creep = Game.creeps[indx];
        if(creep.memory.role == ROLE_HARVESTER) {
            roleHarvester.run(creep);
        }
    }
    
}