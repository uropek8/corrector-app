import {
  amounCalculate,
  deadlineDurationCalculate,
  deadlineDateCalculate,
  checkIsWorkTime,
} from "./calculate";

describe("amounCalculate function", () => {
  test("shoud be defined", () => {
    expect(amounCalculate("en", 656)).toBeDefined();
  });

  test("Return 120 for correct type of eng text with length 656", () => {
    expect(amounCalculate("en", 656, true)).toEqual(120);
  });

  test("Return 50 for correct type of ru text with length 656", () => {
    expect(amounCalculate("ru", 656, true)).toEqual(50);
  });

  test("Return 50 for correct type of uk text with length 656", () => {
    expect(amounCalculate("uk", 656, true)).toEqual(50);
  });

  test("Return more than 50 for correct type of ru text with length 656", () => {
    expect(amounCalculate("ru", 656)).toBeGreaterThan(50);
  });

  test("Return 60 for none type of uk text with length 656", () => {
    expect(amounCalculate("uk", 656)).toEqual(60);
  });

  test("Return 144 for none type of eng text with length 656", () => {
    expect(amounCalculate("en", 656)).toEqual(144);
  });
});

describe("deadlineDurationCalculate function", () => {
  test("shoud be defined", () => {
    expect(deadlineDurationCalculate("en", 656)).toBeDefined();
  });

  test("Return 148 min duration for eng text with length 656", () => {
    expect(deadlineDurationCalculate("en", 656)).toEqual(148);
  });

  test("Return 60 min duration for ru text with length 656", () => {
    expect(deadlineDurationCalculate("uk", 656)).toEqual(60);
  });

  test("Return 60 min duration for eng text with length 2", () => {
    expect(deadlineDurationCalculate("en", 2)).toEqual(60);
  });

  test("Return 60 min duration for ru text with length 2", () => {
    expect(deadlineDurationCalculate("uk", 2)).toEqual(60);
  });
});

describe("deadlineDateCalculate function", () => {
  test("shoud be defined", () => {
    expect(deadlineDateCalculate(new Date(), 90)).toBeDefined();
  });

  test("Return date 30.08 11:30 from order of 28.08 23:30 to 90 min", () => {
    expect(deadlineDateCalculate(new Date(2021, 7, 27, 23, 30), 90)).toEqual(new Date(2021, 7, 30, 11, 30));
  });

  test("Return date 30.08 19:01 from order of 30.08 11:07 to 67 min", () => {
    expect(deadlineDateCalculate(new Date(2021, 7, 30, 19, 1), 67)).toEqual(new Date(2021, 7, 31, 11, 7));
  });

  test("Return date 30.08 09:00 from order of 30.08 11:07 to 67 min", () => {
    expect(deadlineDateCalculate(new Date(2021, 7, 30, 9), 67)).toEqual(new Date(2021, 7, 30, 11, 7));
  });

  test("Return date 06.09 11:07 from order of 03.09 22:50 to 45 min", () => {
    expect(deadlineDateCalculate(new Date(2021, 8, 3, 22, 50), 45)).toEqual(new Date(2021, 8, 6, 10, 45));
  });
});

describe("checkIsWorkTime function", () => {
  test("shoud be defined", () => {
    expect(checkIsWorkTime(7)).toBeDefined();
  });

  test("Return true if time is 10.00", () => {
    expect(checkIsWorkTime(10)).toBeTruthy();
  });

  test("Return true if time is 18.00", () => {
    expect(checkIsWorkTime(18)).toBeTruthy();
  });

  test("Return false if time is 19.00", () => {
    expect(checkIsWorkTime(19)).toBeFalsy();
  });

  test("Return false if time is 0", () => {
    expect(checkIsWorkTime(0)).toBeFalsy();
  });
});
