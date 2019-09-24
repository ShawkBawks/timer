let timeArray = process.argv.slice(2);


for (let item of timeArray){
  let num = (parseInt(item));
  if (num === ""|| num< 0 || num===NaN ){
    return "";
  } else {
    setTimeout(() => {process.stdout.write('\x07')}, num*1000);
  }
};


// // let timer =function (time){
//   if (time === ""|| time < 0 || time===NaN ){
//     return "";
//   } else {
//     return time*1000;
// //   };
// // };

//setTimeout(() => {process.stdout.write('\x07')}, numArray);

//console.log(timer);

// setTimeout(() => {
//   process.stdout.write(spinArray[i]);
// }, time);

// }