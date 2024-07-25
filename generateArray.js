// generate array with random numbers
export default function generateArray() {
  let arr = new Array(10);
  let random;

  for (let i = 0; i < arr.length; i++) {
    random = Math.trunc(Math.random() * 100);
    arr[i] = random;
  }

  return arr;
}
