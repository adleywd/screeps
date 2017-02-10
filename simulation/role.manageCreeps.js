var spawn1 = Game.spawns["Spawn1"];
var smallBody = [WORK,CARRY,MOVE];

var manageCreeps = {
     /** @param {role} creep **/
    run: function (role, deleteCreep) {
        
        // Delete dead creeps
        if(deleteCreep){
            for(var name in Memory.creeps) {
                if(!Game.creeps[name]) {
                    delete Memory.creeps[name];
                    console.log('Clearing non-existing creep memory:', name);
                }
            }
        }else{
        
            // Spawn a new harvester    
            if(spawn1.canCreateCreep(body, null) == OK) {
                var result = spawn.createCreep(smallBody, null, {role: ROLE_HARVESTER});
                if(_.isString(result)) {
                    console.log('The creep name is: ' + result);
                }
                else {
                    console.log('Spawn creep error: ' + result);
                }
            }else{
                console.log("Can not spawn new creep: " + spawn.canCreateCreep(body,null))
            }
            
        }
    }
    
    deleteCreep: function (){
       for(var name in Memory.creeps) {
            if(!Game.creeps[name]) {
                delete Memory.creeps[name];
                console.log('Clearing non-existing creep memory:', name);
            }
        }
    }
    
};

module.exports = manageCreeps;