const checkMagazine = (magazine, note) => {
  const noteArr = note.filter( word => {
    const index = magazine.indexOf(word)

    if(index > -1) {
      magazine.splice(index, 1);
      return true;
    }

    return false;
        
  });

  if (noteArr.length === note.length) {
    console.log('Yes')
  } else {
    console.log('No')
  }
}
