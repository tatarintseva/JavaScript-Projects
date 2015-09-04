function arrayCreation(num) {
  var a = [];
  for (var i = 1; i <= num; i++) {
    a.push(Math.floor(Math.random() * 100 + 1));
  }
  return a;
}

// Realization of the algorithm  for insertion sort
function insertion(a) {
  var key, i;
  for (var j = 1; j < a.length; j++) {
    key = a[j];
    i = j - 1;
    while (i >= 0 && a[i] > key) {
      a[i + 1] = a[i];
      i--;
    }
    a[i + 1] = key;
  }
  console.log('Array is sorted using Insertion Sort = ');
  return a;
}

function bubble(a) {
  var tmp;
  for (var j = 0; j < a.length; j++) {
    for (var i = 0; i < a.length; i++) {
      if (a[i] > a[i + 1]) {
        tmp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = tmp;
      }
    }
  }

  console.log('Array is sorted using Bubble Sort = ');
    return a;
}

function selection(a) {
  var change = 0,
    minNum, tmp, min;

    for (var j = 0; j < a.length; j++) {
    min = a[j];

        for (var i = j + 1; i < a.length; i++) {
            if (a[i] < min) {
            min = a[i];
            minNum = i;
            change++;
            }
        }

    if (change !== 0) {
      tmp = a[minNum];
      a[minNum] = a[j];
      a[j] = tmp;
    }

    change = 0;
  }

  console.log('Array is sorted using Selection sort = ');
    return a;
}

function innerSort(a){
    a.sort(function(x,y){return(x-y)});
    console.log('Array is sorted using Built-in sort = ');
    console.log('length = ', a.length);
    return a;
}

function timeCount(start){
    var end = new Date().getTime();
    console.log('start = ' + start + 'end=' + end);
    return end-start;
}

function cellTimeInfo(){

    //First array
    start = new Date().getTime();
    insertion(unsortedArrays[0]);
    document.getElementById('insertion' + firstArrayLength).innerHTML = timeCount(start);

    start = new Date().getTime();
    bubble(unsortedArrays[0]);
    document.getElementById('bubble' + firstArrayLength).innerHTML = timeCount(start);

    start = new Date().getTime();
    selection(unsortedArrays[0]);
    document.getElementById('selection' + firstArrayLength).innerHTML = timeCount(start);

    start = new Date().getTime();
    innerSort(unsortedArrays[0]);
    document.getElementById('innerSort' + firstArrayLength).innerHTML = timeCount(start);

    //Second array

    start = new Date().getTime();
    insertion(unsortedArrays[1]);
    document.getElementById('insertion' + secondArrayLength).innerHTML = timeCount(start);

    start = new Date().getTime();
    bubble(unsortedArrays[1]);
    document.getElementById('bubble' + secondArrayLength).innerHTML = timeCount(start);

    start = new Date().getTime();
    selection(unsortedArrays[1]);
    document.getElementById('selection' + secondArrayLength).innerHTML = timeCount(start);

    start = new Date().getTime();
    innerSort(unsortedArrays[1]);
    document.getElementById('innerSort' + secondArrayLength).innerHTML = timeCount(start);

    //Third array

    start = new Date().getTime();
    insertion(unsortedArrays[2]);
    document.getElementById('insertion' + thirdArrayLength).innerHTML = timeCount(start);

    start = new Date().getTime();
    bubble(unsortedArrays[2]);
    document.getElementById('bubble' + thirdArrayLength).innerHTML = timeCount(start);

    start = new Date().getTime();
    selection(unsortedArrays[2]);
    document.getElementById('selection' + thirdArrayLength).innerHTML = timeCount(start);

    start = new Date().getTime();
    innerSort(unsortedArrays[2]);
    document.getElementById('innerSort' + thirdArrayLength).innerHTML = timeCount(start);

    $('.sort').append(' ms');
}

var unsortedArrays = [],
    start,
    firstArrayLength = 5000,
    secondArrayLength = 10000,
    thirdArrayLength = 15000;

(function () {
    unsortedArrays.push(arrayCreation(firstArrayLength), arrayCreation(secondArrayLength), arrayCreation(thirdArrayLength));

    document.getElementById('firstArrayLength').innerHTML = firstArrayLength + ' elements';
    document.getElementById('secondArrayLength').innerHTML = secondArrayLength + ' elements';
    document.getElementById('thirdArrayLength').innerHTML = thirdArrayLength + ' elements';

    //Sign for showing sorting is in progress
    $('.sort').each(function(){
        $(this).append('<i class="fa fa-spinner fa-spin"></i>');
    });

    cellTimeInfo();

    $('#startSort').on('click', function(){
        unsortedArrays=[];
        unsortedArrays.push(arrayCreation(firstArrayLength), arrayCreation(secondArrayLength), arrayCreation(thirdArrayLength));
        cellTimeInfo();
        console.log('new');
    });
})();

