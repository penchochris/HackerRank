const isHourglassPossible = (arr, i, j) => 
  arr[i].slice(j, 6).length > 2 && arr.slice(i, 6).length > 2;

const getHourglassTop = (arr, i, j) => 
  arr[i][j] + arr[i][j + 1] + arr[i][j + 2];

const getHourglassMiddle = (arr, i, j) => arr[i + 1][j + 1];

const getHourglassBottom = (arr, i, j) => 
  arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];

const getHourglassSum = (arr, i, j) => 
  getHourglassTop(arr, i, j) 
  + getHourglassMiddle(arr, i, j)
  + getHourglassBottom(arr, i, j);

const hourglassSum = arr => {
  let bigger;
  arr.map((elementI, i) => {
    elementI.map((elementJ, j) => {
      let sum = 0;
      if (isHourglassPossible(arr, i, j)) {
        sum = getHourglassSum(arr, i, j)
        if (bigger < sum || bigger === undefined) bigger = sum;
      }
    });
  });

  return bigger;
}