const jumpingOnClouds = clouds => {
  let movements = 0;
  let arrayIndex = 0;

  clouds.map((cloud, i) => {
    if (arrayIndex === i) {
      if(clouds[i + 2] === 0 && typeof(clouds[i + 2]) === 'number') {
        arrayIndex = arrayIndex + 2
        movements++
      } else {
        if (typeof(clouds[i + 1]) === 'number') {
          arrayIndex++;
          movements++;
        }
      }
    }
  });

  return movements;
}