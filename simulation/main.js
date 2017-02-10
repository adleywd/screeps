module.exports.loop = function () {
    var spawn1 = Game.spawns["Spawn1"];
    var smallBody = [WORK,CARRY,MOVE];
    
    // Create a harvester    
    if(spawn.canCreateCreep(body, name) == OK) {
        var result = spawn.createCreep(smallBody, null, {role: 'harvester'});
        if(_.isString(result)) {
            console.log('The creep name is: '+result);
        }
        else {
            console.log('Spawn creep error: '+result);
        }
    }
    
}