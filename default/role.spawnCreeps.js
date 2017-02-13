// Consts
var spawn = Game.spawns["Spawn1"];
var smallBody = [WORK, CARRY, MOVE];
var CONST_HARVESTER = "harvester";
var CONST_BUILDER = "builder";
var CONST_UPGRADER = "upgrader";
var CONST_MAX_HARVESTER = 3;
var CONST_MAX_BUILDER = 2;
var CONST_MAX_UPGRADER = 3;

var spawnCreeps = {
    /** @param {role} creep **/
    run: function (role) {
        var list_harvest = [];
        var list_builder = [];
        var list_upgrader = [];

        for (var name in Game.creeps) {
            if (Game.creeps[name].role == CONST_HARVESTER) {
                list_harvest.push(Game.creeps[name]);
            }
            if (Game.creeps[name].role == CONST_BUILDER) {
                list_builder.push(Game.creeps[name]);
            }
            if (Game.creeps[name].role == CONST_UPGRADER) {
                list_upgrader.push(Game.creeps[name]);
            }
        }

        // Spawn a new harvester    
        if (list_harvest.length <= CONST_MAX_HARVESTER) {
            if (spawn.canCreateCreep(smallBody, null) == OK) {
                var result = spawn.createCreep(smallBody, null, { role: CONST_HARVESTER });
                if (_.isString(result)) {
                    console.log('The creep name is: ' + result);
                }
                else {
                    console.log('Spawn creep error: ' + result);
                }
            } else {
                console.log("Can not spawn new creep: " + spawn.canCreateCreep(smallBody, null))
            }
        }

        // Spawn a new builder  
        if (list_builder.length <= CONST_MAX_BUILDER) {
            if (spawn.canCreateCreep(smallBody, null) == OK) {
                var result = spawn.createCreep(smallBody, null, { role: CONST_BUILDER });
                if (_.isString(result)) {
                    console.log('The creep name is: ' + result);
                }
                else {
                    console.log('Spawn creep error: ' + result);
                }
            } else {
                console.log("Can not spawn new creep: " + spawn.canCreateCreep(smallBody, null))
            }
        }

        // Spawn a new upgrader 
        if (list_upgrader.length <= CONST_MAX_UPGRADER) {
            if (spawn.canCreateCreep(smallBody, null) == OK) {
                var result = spawn.createCreep(smallBody, null, { role: CONST_UPGRADER });
                if (_.isString(result)) {
                    console.log('The creep name is: ' + result);
                }
                else {
                    console.log('Spawn creep error: ' + result);
                }
            } else {
                console.log("Can not spawn new creep: " + spawn.canCreateCreep(smallBody, null))
            }
        }

    }
};

module.exports = spawnCreeps;