//Load Roles
var deathCreeps = require('role.deathCreeps');
var spawnCreeps = require('role.spawnCreeps');
var roleHarvester = require('role.harvester');
var roleBuilder = require('role.builder');
var roleUpgrade = require('role.upgrader');

// Consts
var CONST_HARVESTER = "harvester";
var CONST_UPGRADER = "upgrader";
var CONST_BUILDER = "builder";

// Main Loop
module.exports.loop = function () {

    deathCreeps.run();

    spawnCreeps.run(CONST_HARVESTER);
    
    for(var indx in Game.creeps) {
        var creep = Game.creeps[indx];
        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if (creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
    
}