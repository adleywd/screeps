/*
    Constants File.
*/
const ROLE_HARVESTER = 'harvester';
const ROLE_BUILDER = 'builder';
const ROLE_UPGRADER = 'upgrader';
const ROLE_REPAIR = 'repair'

var smallBody = [WORK, CARRY, MOVE];
var mediumWorkBody = [WORK, WORK, CARRY, MOVE];
var hardWorkBody = [WORK, WORK, WORK, CARRY, MOVE];
var veryHardWorkBody = [WORK, WORK, WORK, WORK, CARRY, MOVE];
var veryHardWorkMediumCarryBody = [WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE];

var BODY_TYPES = [smallBody, mediumWorkBody, hardWorkBody, veryHardWorkBody, veryHardWorkMediumCarryBody];

module.exports = {
    ROLE_HARVESTER,
    ROLE_BUILDER,
    ROLE_UPGRADER,
    ROLE_REPAIR,

    BODY_TYPES
};