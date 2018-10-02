module.exports = function longestConsecutiveLength(array) {
  

  // first step 

  if(array.length === 0){
    console.log(typeof(array[0]));
    return 0;
  }

  if(array.length === 1){
    return 1;
  }

  // second step

  var maxLength = 0;

  /// version with sort
  array.sort(function(a, b){
    return a - b;
  });

  var arrayLength = array.length;

  var counter = 1;

  var max = 1;

  var id = 0;

  for(let i = 0; i < arrayLength; i++){

    if((array[i]+1) === array[i+1]){
      counter++;
    } else {
      if(counter > max){
        max = counter;
        id = i;
      }
      counter = 1;
    }
  }

  //console.log("Max length - " + max);
  //console.log("item i-1, i, i+1 - " + array[id-1] + ", " + array[id] + ", " + array[id+1]);



/*
  while(array.length > 1){

    var root = array[0];

    
    var counter = 1;
    var left = array[0]-1;
    var right = array[0]+1;
    var l = 0;
    var r = 0;
      
    do {
      //console.log(array);

      if(l>=0){
        l = array.indexOf(left);

        if(l>=0){
          left--;
          array.splice(l, 1);
          counter++;
        }
          
      }
        
      if(r>=0){
        r = array.indexOf(right);

        if(r>=0){
          right++;
          array.splice(r, 1);
          counter++;
        }
        
          
      }

    } while(r>=0 || l>=0);

    array.splice(0, 1);
    
    if(counter > maxLength){
      maxLength = counter;
    }

    
      
  }
  
  console.log('Max length - ' + maxLength);
  */
  
  return max;
}
