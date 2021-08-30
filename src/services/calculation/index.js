const textStr = `Как правильно перевести имя или название? Почему правильно так, а не иначе? 
Какая формулировка лучше? Где посмотреть правила? Мы ответим на эти и многие другие ваши вопросы 
точно, аргументированно и очень оперативно. Как правильно перевести имя или название? Почему 
правильно так, а не иначе? Какая формулировка лучше? Где посмотреть правила? Мы ответим на эти 
и многие другие ваши вопросы точно, аргументированно и очень оперативно. Как правильно перевести 
имя или название? Почему правильно так, а не иначе? Какая формулировка лучше? Где посмотреть 
правила? Мы ответим на эти и многие другие ваши вопросы точно, аргументированно и очень оперативно.`;

const LangEnum = Object.freeze({
  RU: "ru",
  UK: "uk",
  EN: "en",
});

// const FileEnum = Object.freeze({
//   NONE: "none",
//   DOC: "doc",
//   DOCX: "docx",
//   RTF: "rtf",
//   PDF: "pdf",
// });

// console.log(textStr.length);

const amounCalculate = (lang, text, type = false) => {
  const textLength = text.length;
  const ratioFileType = 1.2;
  let amount = 0;

  if (lang === LangEnum.RU || lang === LangEnum.UK) {
    amount = textLength * 0.05 > 50 ? textLength * 0.05 : 50;
  } else {
    amount = textLength * 0.12 > 120 ? textLength * 0.12 : 120;
  }

  return type ? Number(amount.toFixed(2)) : Number((amount * ratioFileType).toFixed(2));
};

const deadlineDurationCalculate = (lang, text) => {
  const textLength = text.length;
  const startMinutes = 30;
  let time = 0;

  if (lang === LangEnum.RU || lang === LangEnum.UK) {
    time = textLength < 1333 ? 60 : (textLength / 1333) * 60;
  } else {
    time = textLength < 333 ? 60 : (textLength / 333) * 60;
  }

  time = time + startMinutes;

  return Number(time.toFixed());
  // return textLength;
};

const deadlineDateCalculate = (date, deadline) => {
  let orderDate = new Date(date);
  const openingDays = [1, 2, 3, 4, 5];
  const startWorkHour = 10;

  for (let i = 0; i < deadline; i++) {
    if (openingDays.includes(orderDate.getDay())) {
      if (!checkIsWorkTime(orderDate.getHours())) {
        if (orderDate.getHours() > startWorkHour) {
          orderDate.setDate(orderDate.getDate() + 1);

          while (!openingDays.includes(orderDate.getDay())) {
            orderDate.setDate(orderDate.getDate() + 1);
          }
        }

        orderDate.setHours(startWorkHour);
        orderDate.setMinutes(0);
      }
    } else {
      orderDate.setDate(orderDate.getDate() + 1);

      while (!openingDays.includes(orderDate.getDay())) {
        orderDate.setDate(orderDate.getDate() + 1);
      }

      orderDate.setHours(startWorkHour);
      orderDate.setMinutes(0);
    }

    orderDate.setMinutes(orderDate.getMinutes() + 1);
  }

  return orderDate;
};

const checkIsWorkTime = (hours) => {
  const startWorkHour = 10;
  const endWorkHour = 19;

  return hours >= startWorkHour && hours < endWorkHour ? true : false;
};

// console.log(deadlineDurationCalculate("en", textStr));
console.log(deadlineDateCalculate("Wed Aug 27 2021 17:36:39 GMT+0300", 148));

export { amounCalculate, deadlineDurationCalculate, deadlineDateCalculate, checkIsWorkTime };
