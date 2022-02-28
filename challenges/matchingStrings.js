function matchingStrings(strings, queries) {
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
