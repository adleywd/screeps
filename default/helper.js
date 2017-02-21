var consts = require('consts');
var _ = require('lodash');

function createCreep(spawn, counter, bodyChosen, role) {
  var result = spawn.createCreep(bodyChosen, null, { role });

  if (_.isString(result)) {
      counter++;
      console.log('Creating new '+role+' creep: ' + result);
  }
  else {
      console.log('Spawn '+role+' creep error: ' + result);
  }

  return counter;
}

function isHarvester(creep){
  return creep.memory.role == consts.ROLE_HARVESTER;
}

function isBuilder(creep){
  return creep.memory.role == consts.ROLE_BUILDER;
}

function isUpgrader(creep){
  return creep.memory.role == consts.ROLE_UPGRADER;
}

function isRepair(creep){
  return creep.memory.role == consts.ROLE_REPAIR;
}

function getCreepsTier(gcl_level, lastTier) {
    return gcl_level >= lastTier ? consts.CREEP_TIER[lastTier] : consts.CREEP_TIER[gcl_level]
}

module.exports = {
    createCreep,
    isHarvester,
    isBuilder,
    isUpgrader,
    isRepair
}
