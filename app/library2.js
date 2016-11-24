module.exports = {



findMinMax:function (array, selector) {

  var val = "";   // variable to hold the current max/min value.

  for (var i = 0; i < array.length; i++) {
    if (selector == "Min") {
      if (array[i] < val) {
        val = arr[i];
      }
    } else if (selector == "Max") {
      if (array[i] > val) {
        val = arr[i];
      }
    }

  }
  return val;
}


}