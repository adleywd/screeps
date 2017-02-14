/*
    Role for Repair Creep.
    Tell what creep need to do (Repair or Harvest).
*/
var roleRepair = {

    /** @param {Creep} creep **/
    run: function (creep) {

        if (creep.memory.repair && creep.carry.energy == 0) {
            creep.memory.repair = false;
            creep.say('harvesting');
        }
        if (!creep.memory.repair && creep.carry.energy == creep.carryCapacity) {
            creep.memory.repair = true;
            creep.say('repairing');
        }
        if (creep.memory.repair) {
            // Find structures without max hits/life
            var targets = creep.room.find(FIND_STRUCTURES, {
                filter: object => object.hits < object.hitsMax
            });

            // Sort the targets
            targets.sort((a, b) => a.hits - b.hits);
            if (targets.length > 0) {
                if (creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                } else {
                    console.log(creep.repair(targets[0]));
                }
            }
        }else {
            var sources = creep.room.find(FIND_SOURCES);
            if (creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[1]);
            }
        }
    }
};

module.exports = roleRepair;