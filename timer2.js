const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

let timeArray = process.argv.slice(2);


for (let item of timeArray){
  let num = (parseInt(item));
  if (num === ""|| num< 0 || num===NaN ){
    return "";
  } else {
    setTimeout(() => {process.stdout.write('\x07')}, num*1000);
  }
};


stdin.on('data', (key) => {
  // process.stdout.write('.');
  if (key === '\u0003') {
    process.exit();
  }else if (key === 'b'){
    process.stdout.write('\x07')
  }else if(0 < key && key <= 9 ){
    console.log(`setting timer for ${key} seconds...`)
    setTimeout(() => {process.stdout.write('\x07')}, key*1000);
  }
});