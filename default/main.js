//Load Requires
var _ = require('lodash');
var consts = require('consts');
var helper = require('helper');
var roleHarvester = require('role.harvester');
var roleBuilder = require('role.builder');
var roleUpgrader = require('role.upgrader');
var roleRepair = require('role.repair');

var creepTier = helper.getCreepsTier(Game.gcl.level, --consts.CREEPS_TIER.length);

var bodyTypes = consts.BODY_TYPES;
// Start body chosen with BODY_TPYES[0] should be the smallest
var bodyChosen = consts.BODY_TYPES[0];

// Get spawn list
var spawnList = [];
for (let i in Game.spawns) {
    spawnList.push(Game.spawns[i]);
}

// Variables that don't do loop
var spawn = spawnList[0];

Memory.creepsCount = {
    num_harversters: 0,
    num_builder: 0,
    num_upgrader: 0,
    num_repair: 0
};

// Update creeps room when code run for the first time.
helper.updateInitialCreepCount();

// Start memory
Memory.creepTier = creepTier;
Memory.mylevel = Game.gcl.level;

module.exports.loop = function () {
    var currentLevel = Game.gcl.level;
    if (currentLevel != Memory.mylevel) {
        var newCreepTier = helper.getCreepsTier(currentLevel, --consts.CREEPS_TIER.length);
        helper.updateCreepsTier(currentLevel, newCreepTier);
    }

    // Clear dead creeps from memory
    helper.clearDeadCreeps();

    // Define what body should use.
    for (let i = bodyTypes.length - 1; i >= 0; i--) {
        if (spawn.canCreateCreep(bodyTypes[i], null) == OK) {
            bodyChosen = bodyTypes[i];
            break;
        }
    }

    // Spawn a new harvester
    if (Memory.creepsCount.num_harvesters <= Memory.creepTier.max_harvester && Memory.creep.max_harvester > 0) {
        if (spawn.canCreateCreep(bodyChosen, null) == OK) {
            Memory.creepsCount.num_harvesters = helper.createCreep(spawn, Memory.creepsCount.num_harvesters, bodyChosen, consts.ROLE_HARVESTER);
        }
    }
    // Spawn a new builder
    if (Memory.creepsCount.num_builder <= Memory.creepTier.max_builder && Memory.creepTier.max_builder > 0) {
        if (spawn.canCreateCreep(bodyChosen, null) == OK) {
            Memory.creepsCount.num_builder = helper.createCreep(spawn, Memory.creepsCount.num_builder, bodyChosen, consts.ROLE_BUILDER);
        }
    }
    // Spawn a new upgrader
    if (Memory.creepsCount.max_upgrader <= Memory.creepTier.max_upgrader && Memory.creep.max_upgrader > 0) {
        if (spawn.canCreateCreep(bodyChosen, null) == OK) {
            Memory.creepsCount.max_upgrader = helper.createCreep(spawn, Memory.creepsCount.max_upgrader, bodyChosen, consts.ROLE_UPGRADER);
        }
    }
    // Spawn a new repair
    if (Memory.creepsCount.max_repair <= Memory.creepTier.max_repair && Memory.creep.max_repair > 0) {
        if (spawn.canCreateCreep(bodyChosen, null) == OK) {
            Memory.creepsCount.max_repair = helper.createCreep(spawn, Memory.creepsCount.max_repair, bodyChosen, consts.ROLE_REPAIR);
        }
    }



    // Define the work for roles
    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (helper.isHarvester(creep)) {
            roleHarvester.run(creep);
        }
        if (helper.isBuilder(creep)) {
            roleUpgrader.run(creep);
        }
        if (helper.isUpgrader(creep)) {
            roleBuilder.run(creep);
        }
        if (helper.isRepair(creep)) {
            roleRepair.run(creep);
        }
    }
}