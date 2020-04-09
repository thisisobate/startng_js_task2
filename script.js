//created an array of objects
let data = [
  { Principal: 2500, time: 1.8 },
  { Principal: 1000, time: 5 },
  { Principal: 3000, time: 1 },
  { Principal: 2000, time: 3 },
];

//interestCalculator function
let interestCalculator = (Array) => {
  let interestData = Array.map((obj) => {
    if (obj.Principal >= 2500 && obj.time > 1 && obj.time < 3) {
      obj.rate = 3;
    } else if (obj.Principal >= 2500 && obj.time >= 3) {
      obj.rate = 4;
    } else if (obj.Principal < 2500 && obj.time <= 1) {
      obj.rate = 2;
    } else {
      obj.rate = 1;
    }
    obj.interest = (obj.Principal * obj.rate * obj.time) / 100;
    return obj;
  });
  console.log(interestData);
  return interestData;
};

interestCalculator(data);

// var interestData = [];

// function interestCalculator(Array) {
//   for (const obj of Array) {
//     if (obj.Principal >= 2500 && obj.time > 1 && obj.time < 3) {
//       obj.rate = 3;
//     } else if (obj.Principal >= 2500 && obj.time >= 3) {
//       obj.rate = 4;
//     } else if (obj.Principal < 2500 && obj.time <= 1) {
//       obj.rate = 2;
//     } else {
//       obj.rate = 1;
//     }

//     obj.interest = (obj.Principal * obj.rate * obj.time) / 100;
//     return obj;
//   }

//   interestData.push(obj);
//   console.log(interestData);
//   return interestData;
// }

// console.log(interestCalculator(data));
