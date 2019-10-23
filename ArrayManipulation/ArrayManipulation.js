const arrayManipulation = (n, queries) => {
  const arr = [];
  let max = 0;

  for (let i = 0; i < n; i++) {
    arr.push(0);
  }

  for(let i = 0; i < queries.length; i++) {
    const [a, b, k ] = queries[i];

    arr[a-1] += k;
    if (b < n) 
      arr[b] -= k;
    }

    for(let i = 1; i < n; i++) {
      arr[i] += arr[i-1];
      if (arr[i] > max)
        max = arr[i];
    }

 return max;
}