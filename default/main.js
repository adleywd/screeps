//Load Roles
var consts = require('consts');
var deathCreeps = require('role.deathCreeps');
var spawnCreeps = require('role.spawnCreeps');
var roleHarvester = require('role.harvester');
var roleBuilder = require('role.builder');
var roleUpgrader = require('role.upgrader');
var roleRepair = require('role.repair');

// How to activate safeMode: Game.spawns['Spawn1'].room.controller.activateSafeMode();

// Main Loop
module.exports.loop = function () {

    deathCreeps.run();

    spawnCreeps.run(CONST_HARVESTER);
    
    for(var indx in Game.creeps) {
        var creep = Game.creeps[indx];
        if (creep.memory.role == consts.ROLE_HARVESTER) {
            roleHarvester.run(creep);
        }
        if (creep.memory.role == consts.ROLE_UPGRADER) {
            roleUpgrader.run(creep);
        }
        if (creep.memory.role == consts.ROLE_BUILDER) {
            roleBuilder.run(creep);
        }
        if (creep.memory.role == consts.ROLE_REPAIR) {
            roleRepair.run(creep);
        }
    }
    
}