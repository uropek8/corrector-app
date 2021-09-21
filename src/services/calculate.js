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

const amounCalculate = (lang, textLength, type = false) => {
  const ratioFileType = 1.2;
  let amount = 0;

  if (lang === LangEnum.RU || lang === LangEnum.UK) {
    amount = textLength * 0.05 > 50 ? textLength * 0.05 : 50;
  } else {
    amount = textLength * 0.12 > 120 ? textLength * 0.12 : 120;
  }

  return type ? Number(amount.toFixed(2)) : Number((amount * ratioFileType).toFixed(2));
};

const deadlineDurationCalculate = (lang, textLength) => {
  const fixedTime = 1800;
  const engFormula = (textLength / 333) * 3600;
  const cyrFormula = (textLength / 1333) * 3600;
  let time = 0;

  if (lang === LangEnum.RU || lang === LangEnum.UK) {
    time = cyrFormula < 1800 ? 1800 : cyrFormula;
  } else {
    time = engFormula < 1800 ? 1800 : engFormula;
  }

  time = (time + fixedTime) / 60;

  return Number(time.toFixed());
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

export { amounCalculate, deadlineDurationCalculate, deadlineDateCalculate, checkIsWorkTime };
