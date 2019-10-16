const repeatedString = (s, n) => {
  const timesRepeat = Math.floor(n / s.length);
  const extraChars = s.length * timesRepeat < n
    ? n - (s.length * timesRepeat)
    : 0;
  const amountByString = [...s].filter(char => char === 'a').length
  const repeatedAChar = amountByString * timesRepeat;
    
  return extraChars 
    ? repeatedAChar + [...s].slice(0, extraChars).filter(char => char === 'a').length
    : repeatedAChar
}