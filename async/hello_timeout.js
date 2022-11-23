// Have our file print out these three words 4311o th3r3 w0r1d three seconds after the file is run. THEN
// Instead of printing the entire sentence together, have our code print out each of the three words one at a time, 1 second apart.


// can do this OR put them in separate functions

// setTimeout(() => {
//   console.log('4311o');
// }, 3000);

// setTimeout(() => {
//   console.log('th3r3');
// }, 4000);

// setTimeout(() => {
//   console.log('w0r1d');
// }, 5000);



// putting them in functions

const setTimeOut1 = (() => {
  setTimeout(() => {
    console.log('4311o');
  }, 3000);
});


const setTimeOut2 = (() => {
  setTimeout(() => {
    console.log('th3r3');
  }, 4000);
});


const setTimeOut3 = (() => {
  setTimeout(() => {
    console.log('w0r1d');
  }, 5000);
});





setTimeOut1(); // runs first
setTimeOut2(); // runs second
setTimeOut3(); // runs third