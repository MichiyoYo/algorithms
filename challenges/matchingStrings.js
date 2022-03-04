/*
There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.
*/

function matchingStrings(strings, queries) {
  if (!strings || !queries) return null;
  if (!strings.length) return null;

  // Write your code here
  let map = new Map();

  queries.forEach((query) => {
    map.set(query, 0);
  });

  strings.forEach((string) => {
    if (map.has(string)) {
      map.set(string, map.get(string) + 1);
    }
  });

  return Array.from(map.values());
}
