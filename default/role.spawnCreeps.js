// Requires
var consts = require('consts');

var spawnList = [];

for (let i in Game.spawns) {
    spawnList.push(Game.spawns[i]);
}

// Variables don't do loop
var spawn = spawnList[0];
var bodyTypes = consts.BODY_TYPES;
// BODY_TPYES[0] should be the smallest
var bodyDefault = consts.BODY_TYPES[0];

// Max creeps according to role
var max_harvester = 3;
var max_builder = 2;
var max_upgrader = 2;
var max_repair = 2;

var spawnCreeps = {
    /** @param {role} creep **/
    run: function (role) {
        var num_harvesters = 0;
        var num_builders = 0;
        var num_upgraders = 0;
        var num_repairs = 0;

        var bodyChosen = [];

        for (var i in Game.creeps) {
            var creep = Game.creeps[i];
            if (creep.memory.role == consts.ROLE_HARVESTER) {
                num_harvesters++;
            }
            if (creep.memory.role == consts.ROLE_BUILDER) {
                num_builders++;
            }
            if (creep.memory.role == consts.ROLE_UPGRADER) {
                num_upgraders++;
            }
            if (creep.memory.role == consts.ROLE_REPAIR) {
                num_repairs++;
            }
        }

        console.log("Quantidade de harvester: " + num_harvesters + "/" + max_harvester);
        console.log("Quantidade de builders: " + num_builders + "/" + max_builder);
        console.log("Quantidade de upgrader: " + num_upgraders + "/" + max_upgrader);
        console.log("Quantidade de reparadores: " + num_repairs + "/" + max_repair);

        // Update the max capacity of creeps according with creeps already spawned (check role by role)
        max_harvester = num_harvesters > max_harvester ? num_harvesters : max_harvester
        max_builder = num_builders > max_builder ? num_builders : max_builder
        max_upgrader = num_upgraders > max_upgrader ? num_upgraders : max_upgrader
        max_repair = num_repairs > max_repair ? num_repairs : max_repair

        // If all creeps have their max, add one more.
        if (num_harvesters >= max_harvester && num_builders >= max_builder
                && num_upgraders >= max_upgrader && num_repairs >= max_repair) {
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
            if (num_repairs <= max_repair) {
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