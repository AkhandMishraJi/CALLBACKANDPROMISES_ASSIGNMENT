function sumAsync(a, b, callback) {
    // Validate that a and b are numbers
    if (typeof a !== 'number' || typeof b !== 'number') {
      callback(new Error('Both arguments must be numbers'));
      return;
    }
  
    // Simulate a delay of 1 second
    setTimeout(() => {
      const sum = a + b;
      callback(null, sum); // Pass the result to the callback
    }, 1000);
  }
  
  // Example usage:
  sumAsync(5, 10, (error, result) => {
    if (error) {
      console.error('Error:', error.message);
    } else {
      console.log('Sum:', result);
    }
  });
  