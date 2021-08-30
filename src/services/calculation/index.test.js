import {
  amounCalculate,
  deadlineDurationCalculate,
  deadlineDateCalculate,
  checkIsWorkTime,
} from "./index";

const textStr = `Как правильно перевести имя или название? Почему правильно так, а не иначе? 
Какая формулировка лучше? Где посмотреть правила? Мы ответим на эти и многие другие ваши вопросы 
точно, аргументированно и очень оперативно. Как правильно перевести имя или название? Почему 
правильно так, а не иначе? Какая формулировка лучше? Где посмотреть правила? Мы ответим на эти 
и многие другие ваши вопросы точно, аргументированно и очень оперативно. Как правильно перевести 
имя или название? Почему правильно так, а не иначе? Какая формулировка лучше? Где посмотреть 
правила? Мы ответим на эти и многие другие ваши вопросы точно, аргументированно и очень оперативно.`; // 656
const textXs = "er";

describe("amounCalculate function", () => {
  beforeEach(() => {});

  test("shoud be defined", () => {
    expect(amounCalculate("en", textStr)).toBeDefined();
  });

  test("shoud return amount for correct type of english text 120", () => {
    expect(amounCalculate("en", textStr, true)).toEqual(120);
  });

  test("shoud return amount for correct type of russian text 50", () => {
    expect(amounCalculate("ru", textStr, true)).toEqual(50);
  });

  test("shoud return amount for correct type of ukrainian text 50", () => {
    expect(amounCalculate("uk", textStr, true)).toEqual(50);
  });

  test("shoud return amount for none type of russian text greater than 50", () => {
    expect(amounCalculate("ru", textStr)).toBeGreaterThanOrEqual(50);
  });

  test("shoud return amount for none type of ukrainian text 60", () => {
    expect(amounCalculate("uk", textStr)).toEqual(60);
  });

  test("shoud return amount for none type of english text 144", () => {
    expect(amounCalculate("en", textStr)).toEqual(144);
  });
});

describe("deadlineDurationCalculate function", () => {
  test("shoud be defined", () => {
    expect(deadlineDurationCalculate("en", textStr)).toBeDefined();
  });

  test("shoud return duration for english text 148", () => {
    expect(deadlineDurationCalculate("en", textStr)).toEqual(148);
  });

  test("shoud return duration for russian text 90", () => {
    expect(deadlineDurationCalculate("ru", textStr)).toEqual(90);
  });

  test("shoud return duration for ukrainian text 90", () => {
    expect(deadlineDurationCalculate("ua", textXs)).toEqual(90);
  });
});

describe("deadlineDateCalculate function", () => {
  test("shoud be defined", () => {
    expect(deadlineDateCalculate(new Date(), 90)).toBeDefined();
  });

  test("shoud return 30.08 11:30 from order of 28.08 23:30 to 90 min", () => {
    expect(deadlineDateCalculate(new Date(2021, 7, 27, 23, 30), 90)).toEqual(new Date(2021, 7, 30, 11, 30));
  });

  test("shoud return 30.08 19:01 from order of 30.08 11:07 to 67 min", () => {
    expect(deadlineDateCalculate(new Date(2021, 7, 30, 19, 1), 67)).toEqual(new Date(2021, 7, 31, 11, 7));
  });

  test("shoud return 30.08 09:00 from order of 30.08 11:07 to 67 min", () => {
    expect(deadlineDateCalculate(new Date(2021, 7, 30, 9), 67)).toEqual(new Date(2021, 7, 30, 11, 7));
  });
});

describe("checkIsWorkTime function", () => {
  test("shoud be defined", () => {
    expect(checkIsWorkTime(7)).toBeDefined();
  });

  test("shoud return true if time is 10", () => {
    expect(checkIsWorkTime(10)).toBeTruthy();
  });

  test("shoud return true if time is 18", () => {
    expect(checkIsWorkTime(18)).toBeTruthy();
  });

  test("shoud return false if time is 19", () => {
    expect(checkIsWorkTime(19)).toBeFalsy();
  });

  test("shoud return false if time is 0", () => {
    expect(checkIsWorkTime(0)).toBeFalsy();
  });
});
