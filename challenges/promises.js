/**
 * Some data to simulate a database from which we are retrieving data
 */

const posts = [
  { title: "I love Javascript", author: "Cree", id: 1 },
  { title: "Meow Paw", author: "Mochi", id: 2 },
  { title: "I play bass", author: "Joe", id: 3 },
];

const authors = [
  { name: "Cree", instagram: "@cree", bio: "Italian developer" },
  { name: "Joe", instagram: "@loejester", bio: "Intronaut bassist" },
  {
    name: "Mochi",
    instagram: "@mochithecatto",
    bio: "I am a cute little kitty and I love cuddles",
  },
];

/**
 * Retrurns a promise that resolves after 2 seconds and if successful
 * it holds the post found
 * @param {*} id the id of the post to find
 * @returns a promise containing the post found or a message in case of rejection
 */
function getPostsById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const found = posts.find((post) => post.id === id);
      if (found) {
        resolve(found);
      } else {
        reject(Error("Nothing here"));
      }
    }, 2000);
  });
}

/**
 * Returns a promise that holds the data about the author of the post passed as argument
 * @param {*} post the post we want to find the author of
 * @returns a promise that holds the data about the author of the post or a message if not found
 */
function hydrateAuthor(post) {
  return new Promise((resolve, reject) => {
    const auth = authors.find((author) => author.name === post.author);
    if (auth) {
      post.author = auth;
      resolve(post);
    } else {
      reject(Error("no authors for this post"));
    }
  });
}

getPostsById(1)
  .then((postData) => hydrateAuthor(postData))
  .then((post) => console.log(post))
  .catch((err) => console.error(err));

/**Example 2 */

/**
 * Two promises to simulate the response of a query
 */
const weather = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ temp: 29, conditions: "Sunny with Clouds" });
  }, 2000);
});

const tweets = new Promise((resolve) => {
  setTimeout(() => {
    resolve(["I like cake", "BBQ is good too!"]);
  }, 500);
});

/**
 * With Promise.all we can wait for multiple promises at the same time
 *
 */
Promise.all([weather, tweets]).then((responses) => {
  const [weather, tweets] = responses;
  console.log(weather, tweets);
});
