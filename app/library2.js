module.exports = {



findMinMax : function (arr) {

 var res = [];
 var len_min = arr.length,len_max = arr.length, min = Infinity, max = -Infinity;
 
 while (len_min--) {
   if (arr[len_min] < min) {
     min = arr[len_min];
   }
 }
  res[0] = min;
  
  
  while (len_max--) {
   if (arr[len_max] > max) {
     max = arr[len_max];
   }
 }
 res[1] = max;
 
 if(res[0] === res[1]){
   
   res.splice( 0,1 );

 }
 return res;

}

 

}