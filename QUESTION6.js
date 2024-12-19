function fetchUserDataAndPosts(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        return response.json();
      })
      .then(userData => {
        // Fetch posts after fetching user data
        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to fetch posts');
            }
            return response.json();
          })
          .then(posts => {
            // Return both user data and posts
            return {
              user: userData,
              posts: posts
            };
          });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  fetchUserDataAndPosts(1).then(result => {
    console.log('User:', result.user);
    console.log('Posts:', result.posts);
  });
    