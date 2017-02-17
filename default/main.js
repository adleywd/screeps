//Load Roles
var consts = require('consts');
var helper = require('helper');
var roleHarvester = require('role.harvester');
var roleBuilder = require('role.builder');
var roleUpgrader = require('role.upgrader');
var roleRepair = require('role.repair');

// How to activate safeMode: Game.spawns['Spawn1'].room.controller.activateSafeMode();

/*-------------------------*/
/* -----Spawn Config -----*/
/*-------------------------*/

// Get spawn list
var spawnList = [];
for (let i in Game.spawns) {
    spawnList.push(Game.spawns[i]);
}

// Variables that don't do loop
var spawn = spawnList[0];
var bodyTypes = consts.BODY_TYPES;
// Start body chosen with BODY_TPYES[0] should be the smallest
var bodyChosen = consts.BODY_TYPES[0];

// Max creeps according to role
var max_harvester = 3;
var max_builder = 2;
var max_upgrader = 2;
var max_repair = 2;

// Min creeps that should have according to role
var min_harvester = 2;
var min_builder = 2;
var min_upgrader = 1;
var min_repair = 1;

// Creeps count
var num_harvesters = 0;
var num_builders = 0;
var num_upgraders = 0;
var num_repair = 0;

// Get all creeps separated by role.
for (var i in Game.creeps) {
    var creep = Game.creeps[i];
    if (helper.isHarvester(creep)) {
        num_harvesters++;
    }
    if (helper.isBuilder(creep)) {
        num_builders++;
    }
    if (helper.isUpgrader(creep)) {
        num_upgraders++;
    }
    if (helper.isRepair(creep)) {
        num_repair++;
    }
}

/*-------------------------*/
/* -- End Spawn Config --*/
/*-------------------------*/

// Main Loop
module.exports.loop = function () {
    spawnCreeps();

    for (var indx in Game.creeps) {
        var creep = Game.creeps[indx];
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

function spawnCreeps() {
    /* ----- Spawn Config -----*/

    /* ----- Clear death creeps config -----*/
    for (var name in Memory.creeps) {
        if (!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    console.log("Quantidade de harvester: " + num_harvesters + "/" + max_harvester);
    console.log("Quantidade de builders: " + num_builders + "/" + max_builder);
    console.log("Quantidade de upgrader: " + num_upgraders + "/" + max_upgrader);
    console.log("Quantidade de reparadores: " + num_repair + "/" + max_repair);

    // If all creeps have their max, add one more.
    if (num_harvesters >= max_harvester && num_builders >= max_builder
            && num_upgraders >= max_upgrader && num_repair >= max_repair) {
        max_harvester++;
        max_builder++;
        max_upgrader++;
        max_repair++;
    }

    // Define what body should use.
    for (let i = bodyTypes.length - 1; i >= 0; i--) {
        if (spawn.canCreateCreep(bodyTypes[i], null) == OK) {
            bodyChosen = bodyTypes[i];
            break;
        }
    }

    // Check if have the min creep in each role.
    if (num_harvesters >= min_harvester || num_builders >= min_builder || num_upgraders >= min_builder || num_repair >= min_repair) {

        // Spawn a new harvester
        if (num_harvesters <= max_harvester) {
            if (spawn.canCreateCreep(bodyChosen, null) == OK) {
                num_harvesters = helper.createCreep(spawn, num_harvesters, bodyChosen, consts.ROLE_HARVESTER);
            }
        }

            // Spawn a new builder
        else if (num_builders <= max_builder) {
            if (spawn.canCreateCreep(bodyChosen, null) == OK) {
                num_builders = helper.createCreep(spawn, num_builders, bodyChosen, consts.ROLE_BUILDER);
            }
        }

            // Spawn a new upgrader
        else if (num_upgraders <= max_upgrader) {
            if (spawn.canCreateCreep(bodyChosen, null) == OK) {
                num_upgraders = helper.createCreep(spawn, num_upgraders, bodyChosen, consts.ROLE_UPGRADER);
            }
        }

            // Spawn a new repair
        else if (num_repair <= max_repair) {
            if (spawn.canCreateCreep(bodyChosen, null) == OK) {
                num_repair = helper.createCreep(spawn, num_repair, bodyChosen, consts.ROLE_REPAIR);
            }
        }

    } else if (num_harvesters < min_harvester) {
        if (spawn.canCreateCreep(bodyChosen, null) == OK) {
            num_harvesters = helper.createCreep(spawn, num_harvesters, bodyChosen, consts.ROLE_HARVESTER);
        }
    } else if (num_builders < min_builder) {
        if (spawn.canCreateCreep(bodyChosen, null) == OK) {
            num_builders = helper.createCreep(spawn, num_builders, bodyChosen, consts.ROLE_BUILDER);
        }
    } else if (num_upgraders < min_upgrader) {
        if (spawn.canCreateCreep(bodyChosen, null) == OK) {
            num_upgraders = helper.createCreep(spawn, num_upgraders, bodyChosen, consts.ROLE_UPGRADER);
        }
    } else if (num_repair < min_repair) {
        if (spawn.canCreateCreep(bodyChosen, null) == OK) {
            num_repair = helper.createCreep(spawn, num_repair, bodyChosen, consts.ROLE_REPAIR);
        }
    }
    /* -- End Spawn Config --*/
}