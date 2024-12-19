function racePromises(promises) {
    return Promise.race(promises)
      .then(result => {
        return { status: 'resolved', result };
      })
      .catch(error => {
        return { status: 'rejected', error };
      });
  }
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'First promise resolved');
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(reject, 50, 'Second promise rejected');
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, 'Third promise resolved');
  });
  
  racePromises([promise1, promise2, promise3]).then(result => {
    console.log(result); // Will log the first promise that resolves or rejects
  });
    