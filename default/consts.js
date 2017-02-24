/*
    Constants File.
*/
const ROLE_HARVESTER = 'harvester';
const ROLE_BUILDER = 'builder';
const ROLE_UPGRADER = 'upgrader';
const ROLE_REPAIR = 'repair'

const smallBody = [WORK, CARRY, MOVE];
const mediumWorkBody = [WORK, WORK, CARRY, MOVE];
const hardWorkBody = [WORK, WORK, WORK, CARRY, MOVE];
const veryHardWorkBody = [WORK, WORK, WORK, WORK, CARRY, MOVE];
const veryHardWorkMediumCarryBody = [WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE];

const BODY_TYPES = [smallBody, mediumWorkBody, hardWorkBody, veryHardWorkBody, veryHardWorkMediumCarryBody];

const creepTier_Zero = {
    num_tier: 0,
    max_harversters: 2,
    max_builder: 1,
    max_upgrader: 2,
    max_repair: 0
};

const creepTier_One = {
    num_tier: 1,
    max_harversters: 4,
    max_builder: 3,
    max_upgrader: 4,
    max_repair: 3
};

const creepTier_Two = {
    num_tier: 2,
    max_harversters: 7,
    max_builder: 4,
    max_upgrader: 7,
    max_repair: 4
};

const creepTier_Three = {
    num_tier: 3,
    max_harversters: 14,
    max_builder: 8,
    max_upgrader: 10,
    max_repair: 8
};

const creepTier_Four = {
    num_tier: 4,
    max_harversters: 28,
    max_builder: 20,
    max_upgrader: 22,
    max_repair: 20
};

const creepTier_Five = {
    num_tier: 5,
    max_harversters: 56,
    max_builder: 36,
    max_upgrader: 44,
    max_repair: 36
};

const CREEPS_TIER = [creepTier_Zero, creepTier_One, creepTier_Two, creepTier_Three, creepTier_Four, creepTier_Five];

module.exports = {
    ROLE_HARVESTER,
    ROLE_BUILDER,
    ROLE_UPGRADER,
    ROLE_REPAIR,

    BODY_TYPES,

    CREEPS_TIER
};