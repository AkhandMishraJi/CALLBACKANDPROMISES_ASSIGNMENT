function getData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data fetched successfully.");
      }, 2000); // 2 seconds delay
    });
  }
  getData().then((message) => {
    console.log(message); // Output: Data fetched successfully.
  });
    