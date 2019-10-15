const divideSocks = socks => {
  const dividedSocks = {} 
  socks.map( sock =>
    dividedSocks[sock] = 
      dividedSocks[sock] === undefined
        ? 1
        : dividedSocks[sock] + 1;
  });
  
  return dividedSocks;
};

const pairSocks = dividedSocks => {
  let pairedSocks = 0;
  
  for (let key in dividedSocks) {
    pairedSocks += Math.floor(dividedSocks[key] / 2)
  }
  
  return pairedSocks;
}

const sockMerchant = (n, socks) =>pairSocks(divideSocks(socks));