const countingValleys = (walkPath) =>
  walkPath.reduce((acc, step) => {
    step === 'U'
      ? acc.level++
      : acc.level--

    if (step === 'U' && acc.level === 0) {
      acc.valleys++;
    }
    
    return acc;

  },{
    level: 0,
    valleys: 0,
  }).valleys