function multiplyWithCallback(numbers, callback) {
    const result = numbers.map(number => number * 2);
    callback(result);
  }
  function printResult(result) {
    console.log(result); // Prints the array with each element multiplied by 2
  }
  
  const numbers = [1, 2, 3, 4, 5];
  multiplyWithCallback(numbers, printResult);
    