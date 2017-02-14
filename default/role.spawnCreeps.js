var consts = require('consts');

// Consts
var spawn = Game.spawns["Spawn1"];
var smallBody = [WORK, CARRY, MOVE];
var mediumWorkBody = [WORK, WORK, CARRY, MOVE];
var hardWorkBody = [WORK, WORK, WORK, CARRY, MOVE];
var veryHardWorkBody = [WORK, WORK, WORK, WORK, CARRY, MOVE];
var veryHardWorkMediumCarryBody = [WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE];

var bodyTypes = [smallBody, mediumWorkBody, hardWorkBody, veryHardWorkBody, veryHardWorkMediumCarryBody];
var bodyDefault = smallBody;

var max_harvester = 3;
var max_builder = 2;
var max_upgrader = 2;
var max_repairs = 2;

var spawnCreeps = {
    /** @param {role} creep **/
    run: function (role) {
        var list_harvest = [];
        var list_builder = [];
        var list_upgrader = [];
        var list_repair = [];

        var num_harvesters = 0;
        var num_builders = 0;
        var num_upgraders = 0;
        var num_repairs = 0;

        var bodyChosen = [];

        for (var i in Game.creeps) {
            var creep = Game.creeps[i];
            if (creep.memory.role == consts.ROLE_HARVESTER) {
                list_harvest.push(Game.creeps[i]);
                num_harvesters = list_harvest.length;
            }
            if (creep.memory.role == consts.ROLE_BUILDER) {
                list_builder.push(Game.creeps[i]);
                num_builders = list_builder.length;
            }
            if (creep.memory.role == consts.ROLE_UPGRADER) {
                list_upgrader.push(Game.creeps[i]);
                num_upgraders = list_upgrader.length;
            }
            if (creep.memory.role == consts.ROLE_REPAIR) {
                list_repair.push(Game.creeps[i]);
                num_repairs = list_repair.length;
            }
        }

        console.log("Quantidade de harvester: " + num_harvesters + "/" + max_harvester);
        console.log("Quantidade de builders: " + num_builders + "/" + max_builder);
        console.log("Quantidade de upgrader: " + num_upgraders + "/" + max_upgrader);
        console.log("Quantidade de reparadores: " + num_repairs + "/" + max_repairs);


        // If all creeps have their max, add one more.
        if (num_harvesters >= max_harvester && num_builders >= max_builder
                && num_upgraders >= max_upgrader && num_repairs >= max_repairs) {
            max_harvester++;
            max_builder++;
            max_upgrader++;
            max_repairs++;
        }

        // Define what body should use.
        for (let i = bodyTypes.length - 1; i >= 0; i--) {
            if (spawn.canCreateCreep(bodyTypes[i], null) == OK) {
                bodyChosen = bodyType[i];
                break;
            }
        }
        // If they can't respawn any body, select default one;
        if (bodyChosen.length == 0) {
            bodyChosen = bodyDefault;
        }


        if (num_harvesters > 0) {

            // Spawn a new harvester    
            if (num_harvesters <= max_harvester) {
                if (spawn.canCreateCreep(bodyChosen, null) == OK) {
                    var result = spawn.createCreep(bodyChosen, null, { role: consts.ROLE_HARVESTER });
                    if (_.isString(result)) {
                        console.log('The creep harvester name is: ' + result);
                    }
                    else {
                        console.log('Spawn creep harvester error: ' + result);
                    }
                }
            }

            // Spawn a new builder  
            if (num_builders <= max_builder) {
                if (spawn.canCreateCreep(bodyChosen, null) == OK) {
                    var result = spawn.createCreep(bodyChosen, null, { role: consts.ROLE_BUILDER });
                    if (_.isString(result)) {
                        console.log('The creep builder name is: ' + result);
                    }
                    else {
                        console.log('Spawn creep builder error: ' + result);
                    }
                }
            }

            // Spawn a new upgrader 
            if (num_upgraders <= max_upgrader) {
                if (spawn.canCreateCreep(bodyChosen, null) == OK) {
                    var result = spawn.createCreep(bodyChosen, null, { role: consts.ROLE_UPGRADER });
                    if (_.isString(result)) {
                        console.log('The creep upgrader name is: ' + result);
                    }
                    else {
                        console.log('Spawn creep upgrader error: ' + result);
                    }
                }
            }

            // Spawn a new repair 
            if (num_repairs <= max_repairs) {
                if (spawn.canCreateCreep(bodyChosen, null) == OK) {
                    var result = spawn.createCreep(bodyChosen, null, { role: consts.ROLE_REPAIR });
                    if (_.isString(result)) {
                        console.log('The creep repair name is: ' + result);
                    }
                    else {
                        console.log('Spawn creep repair error: ' + result);
                    }
                }
            }

        } else {
            //If doesn't have any harverster
            if (spawn.canCreateCreep(bodyChosen, null) == OK) {
                var result = spawn.createCreep(bodyChosen, null, { role: consts.ROLE_HARVESTER });
                if (_.isString(result)) {
                    console.log('The creep harvester name is: ' + result);
                }
                else {
                    console.log('Spawn creep harvester error: ' + result);
                }
            }
        }

    }
};

module.exports = spawnCreeps;