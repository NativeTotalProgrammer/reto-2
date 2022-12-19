const array1 = ['O','Q','R','S'];

function findMissingLetter(array) {
  let startLetter = array[0].charCodeAt();
  for (let i = 0; i < array.length; i++) {
    console.log(startLetter + i, array[i].charCodeAt());
    if (startLetter + i !== array[i].charCodeAt()) {
      return String.fromCharCode(startLetter + i);
    };
  };
};

findMissingLetter(array1);