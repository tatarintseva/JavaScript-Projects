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
  console.log('Array is sorted using Insertion Sort = ' + a);
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
  console.log('Array is sorted using Bubble Sort = ' + a);
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

  console.log('Array is sorted using Selection sort = ' + a);
}

var a = arrayCreation(10);
console.log('Initial array = ' + a);
insertion(a);
bubble(a);
selection(a);
