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

  //var noFamily = 0;


  for(let i = 0; i < array.length; i++){

    var root = array[i];

    if(root !== undefined){

      var counter = 1;
      var left = array[i];
      var right = array[i];
      var l = 0;
      var r = 0;
      
      do {

        if(l>=0){
          l = array.indexOf(left-1);

          if(l>=0){
            left = array[l];
            delete array[l];
            counter++;
          }
          
        }
        
        if(r>=0){
          r = array.indexOf(right+1);

          if(r>=0){
            right = array[r];
            delete array[r];
            counter++;
          }
        
          
        }




      } while(r>=0 || l>=0);

      if(counter > maxLength){
        maxLength = counter;
      }
      
    }
  }


  console.log('Max length - ' + maxLength);
  return maxLength;
}
