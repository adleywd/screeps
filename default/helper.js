var consts = require('consts');
var _ = require('lodash');

function createCreep(spawn, counter, bodyChosen, role) {
    var result = spawn.createCreep(bodyChosen, null, { role });

    if (_.isString(result)) {
        counter++;
        console.log('Creating new ' + role + ' creep: ' + result);
    }
    else {
        console.log('Spawn ' + role + ' creep error: ' + result);
    }

    return counter;
}

function isHarvester(creep) {
    return creep.memory.role == consts.ROLE_HARVESTER;
}

function isBuilder(creep) {
    return creep.memory.role == consts.ROLE_BUILDER;
}

function isUpgrader(creep) {
    return creep.memory.role == consts.ROLE_UPGRADER;
}

function isRepair(creep) {
    return creep.memory.role == consts.ROLE_REPAIR;
}

function getCreepsTier(gcl_level, lastTier) {
    return gcl_level >= lastTier ? consts.CREEPS_TIER[lastTier] : consts.CREEPS_TIER[gcl_level]
}

function updateCreepsTier(gcl_level, creepTier) {
    Memory.gcl.level = gcl_level;
    Memory.creepTier = creepTier;
    console.log("New gcl level: " + Memory.gcl.level + " | New Creep Tier: " + Memory.creepTier.num_tier);
}

/* ----- Clear death creeps config -----*/
function clearDeadCreeps() {
    for (var name in Memory.creeps) {
        if (!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
}

function updateInitialCreepCount() {

    clearDeadCreeps();

    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (isHarvester(creep)) {
            Memory.creepsCount.num_harversters++;
        }
        if (isBuilder(creep)) {
            Memory.creepsCount.num_builder++;
        }
        if (isUpgrader(creep)) {
            Memory.creepsCount.num_upgrader++;
        }
        if (isRepair(creep)) {
            Memory.creepsCount.num_repair++;
        }
    }
}

module.exports = {
    createCreep,
    isHarvester,
    isBuilder,
    isUpgrader,
    isRepair,
    getCreepsTier,
    updateCreepsTier,
    clearDeadCreeps,
    updateInitialCreepCount
}
