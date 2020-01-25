import top3Words, { sanitizeInput, recurringWordsByCount, sortWordsByCount } from "../src/index";

describe("Top 3 Words function", () => {
  it("should throw if invalid input other than a string is provided", () => {
    const input: any = [];

    expect(() => {
      top3Words(input);
    }).toThrow();
  });

  it("should return the top 3 occurring words from a string with a hyphen", () => {
    const input =
      "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.";

    expect(top3Words(input)).toEqual(["a", "of", "on"]);
  });

  it("should return the top 3 occurring words from a string with letters and colons", () => {
    const input = "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e";

    expect(top3Words(input)).toEqual(["e", "ddd", "aa"]);
  });

  it("should return the top 3 occurring words from a string with apostrophes and forward slashes", () => {
    const input = " //wont won't won't";

    expect(top3Words(input)).toEqual(["won't", "wont"]);
  });

  it("should return no words if there are not any in the provided input", () => {
    const input = "";

    expect(top3Words(input)).toEqual([]);
  });
});

describe("sanitizeInput", () => {
  it("should filter out new lines and special characters", () => {
    expect(
      sanitizeInput(`
    a
    ! ? ; , //
    lol
    `)
    ).toEqual(["a", "lol"]);
  });
});

describe("recurringWordsByCount", () => {
  it("should return an object with the words and their counts", () => {
    expect(recurringWordsByCount(["a", "a", "b", "c", "d", "d", "e"])).toEqual({ a: 2, b: 1, c: 1, d: 2, e: 1 });
  });
});

describe("sortWordsByCount", () => {
  it("should return a sorted array of words based on their descending counts", () => {
    expect(sortWordsByCount({ a: 2, b: 1, c: 1, d: 2, e: 1 })).toEqual(['a', 'd', 'b', 'c', 'e']);
  });
});
