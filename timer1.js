let timeInput = parseInt(process.argv[2]);


let timer =function (time){
  if (time === ""|| time < 0 || time===NaN ){
    return "";
  } else {
    return time*1000;
  };
};

setTimeout(() => {process.stdout.write('\x07')}, timer(timeInput));

//console.log(timer);

// setTimeout(() => {
//   process.stdout.write(spinArray[i]);
// }, time);

// }