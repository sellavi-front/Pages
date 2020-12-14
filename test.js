// const arr = [
//   "путин",
//   "Джобс",
//   "путин",
//   "путин",
//   "путин",
//   "обама",
//   "обама",
//   "обама",
//   "обама",
//   "обама",
//   "бенджамин",
//   "бенджамин",
//   "бенджамин",
//   "новость",
//   "хаски",
//   "хаски",
//   "хаски",
//   "хаски",
//   "хаски",
//   "хаски",
//   "хаски",
//   "хаски",
//   "хаски",
// ];

// const sorted = [];

// const re = arr.reduce(function (acc, el) {
//   acc[el] = (acc[el] || 0) + 1;
//   return acc;
// }, {});

// const copy = Object.entries(re);
// const nw = [];

// let prop = [];
// let newArr = [];

// console.log('re', Object.assign(re));
// Object.entries(re).map((el, i, arr) => {
//   prop.push(arr[i][1]);
// });
// prop.sort();

// copy.forEach((el, i, arr) => {
//   console.log('propi', Object.assign(arr));
//     if (arr[i][1] > prop[i]) {
//       newArr.push(arr[i]);
//     }
// });
// console.log(Object.assign(copy));
// console.log('arr', newArr);

// console.log(re);

  const date = new Date()
  const newdate = new Date(date.valueOf() + ((24 * 60 * 60 * 1000) * -7)); // желаемая дата
  const iso = newdate.toISOString().substr(0,10);
  const now = date.toISOString().substr(0,10)
console.log(now);

