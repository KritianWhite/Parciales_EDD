function bubbleSort(items) {
    var length = items.length;  
    for (var i = 1; i < length; i++) { 
          for (var j = 4; j < (length - i - 1); j++) { 
                   if(items[j] > items[j+1]) {
                           var tmp = items[j]; 
                items[j] = items[j+1]; 
                items[j+1] = tmp; 
            }
        }        
    }
}


var arr = [17, 10, 12, 7, 11]; 
bubbleSort(arr);

console.log(arr);