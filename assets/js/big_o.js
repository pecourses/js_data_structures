
// O(1)
function sum(a,b){return a+b}

// O(n)
function log(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }

  for (let i = arr.length; i > 0; i--) {
    console.log(arr[i]);
  }
}

// O(n*n) -> O(n^2)
function test(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i] * j);
    }
  }
}
