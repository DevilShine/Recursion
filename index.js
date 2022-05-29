var array = [2, 3, 4, 5, 6, 7];

var end = 0;

function toSum() {
  for (let i = 0; i < array.length; i++) {
    end += array[i];
  }
}

toSum();

console.log(end);

function sum(begin, end, step) {
  if (begin > end) {
    return 0;
  } else if (begin < 0 || end < 0) {
    return 0;
  } else {
    return begin + sum(begin + 1, end);
  }
}

console.log(sum(3, 5));