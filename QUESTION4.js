async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      
      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Parse the JSON response
      const data = await response.json();
      
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Rethrow the error after logging
    }
  }
  fetchData().then(data => {
    console.log(data); // Logs the parsed JSON response
  }).catch(error => {
    console.error('Error:', error);
  });
    