// Consts
var spawn = Game.spawns["Spawn1"];
var smallBody = [WORK, CARRY, MOVE];
var ROLE_HARVESTER = "harvester";

var spawnCreeps = {
     /** @param {role} creep **/
    run: function (role) {

        // Spawn a new harvester    
        if(spawn.canCreateCreep(smallBody, null) == OK) {
            var result = spawn.createCreep(smallBody, null, {role: ROLE_HARVESTER});
            if(_.isString(result)) {
                console.log('The creep name is: ' + result);
            }
            else {
                console.log('Spawn creep error: ' + result);
            }
        }else{
            console.log("Can not spawn new creep: " + spawn.canCreateCreep(smallBody,null))
        }

    }
};

module.exports = spawnCreeps;