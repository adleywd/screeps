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

        for (var name in Game.creeps) {
            if (Game.creeps[name].role == CONST_HARVESTER) {
                list_harvest.push(Game.creeps[name]);
                num_harvesters = list_harvest.length;
            }
            if (Game.creeps[name].role == CONST_BUILDER) {
                list_builder.push(Game.creeps[name]);
                num_builders = list_builder.length;
            }
            if (Game.creeps[name].role == CONST_UPGRADER) {
                list_upgrader.push(Game.creeps[name]);
                num_upgraders = list_upgrader.length;
            }
        }

        console.log("Quantidade de harvester: " + num_harvesters);
        console.log("Quantidade de builders: " + num_builders);
        console.log("Quantidade de upgrader: " + num_upgraders);

        if (num_harvesters == MAX_HARVESTER && num_builders == MAX_BUILDER && num_upgraders == MAX_UPGRADER) {
            MAX_HARVESTER = MAX_HARVESTER + 1;
            MAX_BUILDER = MAX_BUILDER + 1;
            MAX_UPGRADER = MAX_UPGRADER + 1;
        }

        // Spawn a new harvester    
        if (list_harvest.length <= MAX_HARVESTER) {
            if (spawn.canCreateCreep(smallBody, null) == OK) {
                var result = spawn.createCreep(smallBody, null, { role: CONST_HARVESTER });
                if (_.isString(result)) {
                    console.log('The creep harvester name is: ' + result);
                }
                else {
                    console.log('Spawn creep harvester error: ' + result);
                }
            } else {
                console.log("Can not spawn new creep harvester: " + spawn.canCreateCreep(smallBody, null))
            }
        }

        // Spawn a new builder  
        if (list_builder.length <= MAX_BUILDER) {
            if (spawn.canCreateCreep(smallBody, null) == OK) {
                var result = spawn.createCreep(smallBody, null, { role: CONST_BUILDER });
                if (_.isString(result)) {
                    console.log('The creep builder name is: ' + result);
                }
                else {
                    console.log('Spawn creep builder error: ' + result);
                }
            } else {
                console.log("Can not spawn new creep builder: " + spawn.canCreateCreep(smallBody, null))
            }
        }

        // Spawn a new upgrader 
        if (list_upgrader.length <= MAX_UPGRADER) {
            if (spawn.canCreateCreep(smallBody, null) == OK) {
                var result = spawn.createCreep(smallBody, null, { role: CONST_UPGRADER });
                if (_.isString(result)) {
                    console.log('The creep upgrader name is: ' + result);
                }
                else {
                    console.log('Spawn creep upgrader error: ' + result);
                }
            } else {
                console.log("Can not spawn new creep upgrader: " + spawn.canCreateCreep(smallBody, null))
            }
        }

    }
};

module.exports = spawnCreeps;