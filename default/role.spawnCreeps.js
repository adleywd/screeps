// Consts
var spawn = Game.spawns["Spawn1"];
var smallBody = [WORK, CARRY, MOVE];
var CONST_HARVESTER = "harvester";
var CONST_BUILDER = "builder";
var CONST_UPGRADER = "upgrader";
var MAX_HARVESTER = 3;
var MAX_BUILDER = 4;
var MAX_UPGRADER = 2;

var spawnCreeps = {
    /** @param {role} creep **/
    run: function (role) {
        var list_harvest = [];
        var list_builder = [];
        var list_upgrader = [];
        var num_harvesters = 0;
        var num_builders = 0;
        var num_upgraders = 0;

        for(var i in Game.creeps) {
            var creep = Game.creeps[i];
            if (creep.memory.role == CONST_HARVESTER) {
                list_harvest.push(Game.creeps[i]);
                num_harvesters = list_harvest.length;
            }
            if (creep.memory.role == CONST_BUILDER) {
                list_builder.push(Game.creeps[i]);
                num_builders = list_builder.length;
            }
            if (creep.memory.role == CONST_UPGRADER) {
                list_upgrader.push(Game.creeps[i]);
                num_upgraders = list_upgrader.length;
            }
        }

        console.log("Quantidade de harvester: " + num_harvesters + "/" + MAX_HARVESTER);
        console.log("Quantidade de builders: " + num_builders + "/" + MAX_BUILDER);
        console.log("Quantidade de upgrader: " + num_upgraders + "/" + MAX_UPGRADER);

        if (num_harvesters == MAX_HARVESTER && num_builders == MAX_BUILDER && num_upgraders == MAX_UPGRADER) {
            MAX_HARVESTER = MAX_HARVESTER + 1;
            MAX_BUILDER = MAX_BUILDER + 1;
            MAX_UPGRADER = MAX_UPGRADER + 1;
        }
        if (num_harvesters > 0) {

            // Spawn a new harvester    
            if (num_harvesters <= MAX_HARVESTER) {
                if (spawn.canCreateCreep(smallBody, null) == OK) {
                    var result = spawn.createCreep(smallBody, null, { role: CONST_HARVESTER });
                    if (_.isString(result)) {
                        console.log('The creep harvester name is: ' + result);
                    }
                    else {
                        console.log('Spawn creep harvester error: ' + result);
                    }
                }
            }

            // Spawn a new builder  
            if (num_builders <= MAX_BUILDER) {
                if (spawn.canCreateCreep(smallBody, null) == OK) {
                    var result = spawn.createCreep(smallBody, null, { role: CONST_BUILDER });
                    if (_.isString(result)) {
                        console.log('The creep builder name is: ' + result);
                    }
                    else {
                        console.log('Spawn creep builder error: ' + result);
                    }
                }
            }

            // Spawn a new upgrader 
            if (num_upgraders <= MAX_UPGRADER) {
                if (spawn.canCreateCreep(smallBody, null) == OK) {
                    var result = spawn.createCreep(smallBody, null, { role: CONST_UPGRADER });
                    if (_.isString(result)) {
                        console.log('The creep upgrader name is: ' + result);
                    }
                    else {
                        console.log('Spawn creep upgrader error: ' + result);
                    }
                }
            }
        } else {
            //If doesn't have any harverster
            if (spawn.canCreateCreep(smallBody, null) == OK) {
                var result = spawn.createCreep(smallBody, null, { role: CONST_HARVESTER });
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