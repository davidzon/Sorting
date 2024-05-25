
function bubbleSort(arr) {
let swapped;

do{
  swapped = false;
    // Iterate through the array
    for(let i = 0; i < arr.length -1 ; i++){


      // let curr = arr[i];
      // let next = arr[i+1];

      if(arr[i] > arr[i+1]){

      let temp = arr[i];

       arr[i] = arr[i+1];
       arr[i+1] = temp;
        swapped = true;
        console.log(arr.join(","));
      }
    }
    // console.log(arr.join(","));
      // if(!swapped){
      //   break;
      // }

  // console.log(arr.join(","));
  } while(swapped);

        // If the current value is greater than its neighbor to the right
        // Swap those values

        // Do not move this console.log
        // console.log(arr.join(","));

    // If you get to the end of the array and no swaps have occurred, return
    return arr;
    // Otherwise, repeat from the beginning
  }


module.exports = bubbleSort;
