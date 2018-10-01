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

  var noFamily = 0;


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
  return maxLength;
}
