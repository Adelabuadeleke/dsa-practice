let counter = 0;
function inception() {
 console.log(counter);
 if (counter > 3) {
  return console.log('done!');
 }
 counter++
 return inception();
}

inception();