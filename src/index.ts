const top3Words = (input: string): Array<string> => {
  // TypeScript is unsound :(
  if (typeof input === "string") {
    // TODO sanitize
    //
    const recurringWordsByCountObject = input.split(" ")
      .map(word => word.toLowerCase())
      .reduce((current: { [key: string]: number }, next: string) => {
      if (typeof next === "string") {
        if (current[next]) {
          current[next] += 1;
        } else {
          current[next] = 1;
        }
        return current;
      }
      return current;
    }, {});
    return Object.keys(recurringWordsByCountObject).sort(function(a, b) {
      return recurringWordsByCountObject[b] - recurringWordsByCountObject[a];
    }).slice(0, 3);
    // return [];
  } else {
    throw new Error("Please input a string to process and return the top 3 words!");
  }
};

export default top3Words;
