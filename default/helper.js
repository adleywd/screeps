function checkResult(spawn, counter, role) => {
  const result = spawn.createCreep(bodyChosen, null, { role });

  if (_.isString(result)) {
      counter++;
      console.log('The creep builder name is: ' + result);
  }
  else {
      console.log('Spawn creep builder error: ' + result);
  }

  return counter;
}

module.exports = {
  checkResult
}
