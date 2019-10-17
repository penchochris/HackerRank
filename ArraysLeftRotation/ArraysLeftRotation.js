function rotLeft(a, d) {
  const rotations = d % a.length;
  if(rotations === 0) {
    return a;
  }

  const rotatingValues = a.slice(0, rotations);
  const restValues = a.slice(rotations, a.length)
  const newArray = restValues.concat(rotatingValues)
    
  return newArray;
}