function fetchMultipleData(urls) {
    const fetchPromises = urls.map(url => fetch(url).then(response => response.json()));
  
    return Promise.all(fetchPromises)
      .then(results => {
        return results; // Array of parsed responses
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3'
  ];
  
  fetchMultipleData(urls).then(responses => {
    console.log(responses); // Logs an array of parsed JSON responses
  });
    