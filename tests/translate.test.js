const translate = require("../src/translate");

describe("translate function", () => {
  test("words that start with the vowel a", () => {
    let result = translate("alabama");
    expect(result).toBe("alabamaway");
  });
  test("words that start with the vowel e", () => {
    let result = translate("eagle");
    expect(result).toBe("eagleway");
  });
  test("words that start with the vowel i", () => {
    let result = translate("iowa");
    expect(result).toBe("iowaway");
  });
  test("words that start with the vowel o", () => {
    let result = translate("ohio");
    expect(result).toBe("ohioway");
  });
  test("words that start with the vowel u", () => {
    let result = translate("utah");
    expect(result).toBe("utahway");
  });
  test("words that start with capital vowel", () => {
    let result = translate("Arizona");
    expect(result).toBe("arizonaway");
  });
  test("does everything convert to lowercase", () => {
    let result = translate("ArKaNsAs");
    expect(result).toBe("arkansasway");
  });
  test("words that start with one consonant 1", () => {
    let result = translate("california");
    expect(result).toBe("aliforniacay");
  });
  test("words that start with one consonant 2", () => {
    let result = translate("Michigan");
    expect(result).toBe("ichiganmay");
  });
  test("words that start with two consonants 1", () => {
    let result = translate("florida");
    expect(result).toBe("oridaflay");
  });
  test("words that start with two consonants 2", () => {
    let result = translate("wyoming");
    expect(result).toBe("omingwyay");
  });
  test("words that start with more consonants", () => {
    let result = translate("chrome");
    expect(result).toBe("omechray");
  });
});
