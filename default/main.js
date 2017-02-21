//Load Requires
var _ = require('lodash');
var consts = require('consts');
var helper = require('helper');
var roleHarvester = require('role.harvester');
var roleBuilder = require('role.builder');
var roleUpgrader = require('role.upgrader');
var roleRepair = require('role.repair');

var selectedTier = [];
module.exports.loop = function () {
    var creepTier = getCreepsTier(Game.gcl.level, consts.CREEPS_TIER.length - 1);
    
    // Define the work for roles
    for (var indx in Game.creeps) {
        var creep = Game.creeps[indx];
        if (helper.isHarvester(creep)) {
            roleHarvester.run(creep);
        }
        if (helper.isBuilder(creep)) {
            roleUpgrader.run(creep);
        }
        if (helper.isUpgrader(creep)) {
            roleBuilder.run(creep);
        }
        if (helper.isRepair(creep)) {
            roleRepair.run(creep);
        }
    }
}