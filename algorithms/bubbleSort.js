// Sort the elements in an array. One way to do this is using bubble sort as follows:
// O(n^2) quadratic time 


function sort(array) {
  for(let i=0; i< array.length; i++) {
    for(let j =i+1; j<array.length; j++) {
      if(array[i] > array[j]) {
        let temp = array[i]; 
        array[i] = array[j]; 
        array[j] = temp; 
      }
    }
  }
  return array; 
}


function sort2(n) {
  for (let outer = 0; outer < n.length; outer++) {
    let outerElement = n[outer];

    for (let inner = outer + 1; inner < n.length; inner++) {
      let innerElement = n[inner];

      if(outerElement > innerElement) {
        // swap
        n[outer] = innerElement;
        n[inner] = outerElement;
        // update references
        outerElement = n[outer];
        innerElement = n[inner];
      }
    }
  }
  return n;
}