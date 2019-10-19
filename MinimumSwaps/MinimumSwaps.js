function minimumSwaps(arr) {
  let swaps = 0;
  let valueToSearch = 1;

  do {
    if (arr[0] === valueToSearch) {
      valueToSearch++;
      arr.shift();
    } else {
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] === valueToSearch) {
          [arr[0], arr[i]] = [arr[i], arr[0]];
          swaps++;
          valueToSearch++;
          arr.shift();
          break;
        }
      };
    }
  } while(arr.length > 1);

  return swaps;
}