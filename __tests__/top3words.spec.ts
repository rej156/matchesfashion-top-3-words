import top3Words from "../src/index";

describe("Top 3 Words function", () => {
  it("should throw if invalid input other than a string is provided", () => {
    const input: any = [];

    expect(() => {
      top3Words(input);
    }).toThrow();
  });

  it("should return the top 3 occurring words from a string with a hyphen", () => {
    const input = "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.";

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
});
