const sanitizeInput = (input: string): string[] => {
  const matched = input.toLowerCase().match(/[^\s.,;!?/]+/g);
  return matched ? matched : [];
};

const recurringWordsByCount = (sanitizedWords: string[]): { [word: string]: number } =>
  sanitizedWords.reduce((current: { [key: string]: number }, next: string) => {
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

const sortWordsByCount = (sortedWords: { [word: string]: number }): string[] =>
  Object.keys(sortedWords).sort((current, next) => sortedWords[next] - sortedWords[current]);

const pipe = <T>(...fns: any) => (input: any): T =>
  fns.reduce((current: any, nextFunction: Function) => {
    return nextFunction(current);
  }, input);

const top3Words = (input: string): string[] => {
  // TypeScript is unsound :(
  if (typeof input === "string") {
    return pipe<string[]>(sanitizeInput, recurringWordsByCount, sortWordsByCount)(input).slice(0, 3);
  } else {
    throw new Error("Please input a string to process and return the top 3 words!");
  }
};

export default top3Words;
