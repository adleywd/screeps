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

module.exports = {
    createCreep
}
