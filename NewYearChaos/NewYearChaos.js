// My solution (using bubble sort):
const minimumBribes = queue => {
  let bribes = 0;

  for (let i = 0; i < queue.length; i++) {
    if (queue[i] - i - 1 > 2) {
      console.log('Too chaotic');
        return;
    }
  }

  let swapped;

  do {
    swapped = false;
    for(let i = 0; i < queue.length; i++) {
      if(queue[i] && queue[i + 1] && queue[i] > queue[i + 1]) {
        [queue[i], queue[i + 1]] = [queue[i + 1], queue[i]];
        swapped = true;
        bribes++;
      }
    }
  } while(swapped);

  console.log(bribes)
}

//Faster solution:

const minimumBribesFaster = queue => {
  let bribes = 0;
  let min = queue.length;

  for (let i = queue.length - 1; i >= 0; i--) {
    if (queue[i] - i - 1 > 2) {
      console.log('Too chaotic');
      return;
    }
    if (queue[i] > i+1){
      bribes += (queue[i]-(i+1));
    } else {
      if (min > queue[i]){
        min = queue[i];
      } else if (queue[i] != min){
        bribes++;
      }
    }
  }

  console.log(bribes)
}