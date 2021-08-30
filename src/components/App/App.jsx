import React, { useState, useEffect } from "react";
import moment from "moment";
// import { useForm } from "react-hook-form";
import SelectField from "../SelectField/SelectField";
import TextAreaField from "../TextAreaField/TextAreaField";
import TextField from "../TextField/TextField";
import {
  amounCalculate,
  deadlineDurationCalculate,
  deadlineDateCalculate,
} from "../../services/calculation/index";
import { serviseOptions, languageOptions } from "../../services/options/index";
import footerLogo from "../../assets/img/footer_logo.png";

function App() {
  const [formFields, setFormFields] = useState({
    service: "",
    text: "",
    email: "",
    name: "",
    comment: "",
    language: "",
    price: 0,
  });
  const [isFormDisabled, setIsFormDisabled] = useState(true);
  const [deadline, setDeadline] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  useEffect(() => {
    if (formFields.service && formFields.text && formFields.language) {
      let orderTime = new Date().getTime();
      let price = amounCalculate(formFields.language, formFields.text);
      let duration = deadlineDurationCalculate(formFields.language, formFields.text);
      let deadline = deadlineDateCalculate(orderTime, duration).getTime();

      if (formFields.email) {
        setIsFormDisabled(false);
      } else {
        setIsFormDisabled(true);
      }

      setDeadline(deadline);
      setFormFields({ ...formFields, price });
    } else {
      setIsFormDisabled(true);
      setDeadline(null);
      setFormFields({ ...formFields, price: 0 });
    }
  }, [formFields.service, formFields.text, formFields.email, formFields.language]);

  return (
    <>
      <main className="flex items-center justify-center flex-col">
        <form className="w-full max-w-7xl grid grid-cols-1 gap-2.5 pt-20 px-4 mb-30 md:grid-cols-17 md:px-15">
          <div className="flex flex-wrap">
            <h3 className="w-full mb-head text-3xl font-medium">
              Замовити переклад або редагування
            </h3>
            <div className="w-field h-17 mb-field">
              <SelectField
                legend="Послуга"
                name="service"
                options={serviseOptions}
                value={formFields.service}
                onChange={handleInputChange}
              />
            </div>
            <div className="max-w-xxl w-full relative mb-6">
              <TextAreaField name="text" value={formFields.text} onChange={handleInputChange} />
            </div>
            <div className="w-field h-17 mr-0 mb-7 sm:mr-7">
              <TextField
                legend="Ваша електронна пошта"
                type="email"
                name="email"
                value={formFields.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-field h-17 mb-7">
              <TextField
                legend="Ваше ім’я"
                type="text"
                name="name"
                value={formFields.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-field h-17 mr-0 mb-7 lg:mb-0 sm:mr-7">
              <TextField
                legend="Коментар або покликання"
                type="text"
                name="comment"
                value={formFields.comment}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-field h-17">
              <SelectField
                legend="Мова"
                name="language"
                options={languageOptions}
                value={formFields.language}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="relative flex justify-center md:block md:justify-start">
            <div className="pt-27 text-center md:text-right">
              <div className="flex items-baseline justify-center mb-3 md:justify-end">
                <span className="text-6xl font-thin text-blue-500">{formFields.price}</span>
                <span className="text-blue-500">грн</span>
              </div>
              <p className="w-full h-6 font-medium text-right">
                {deadline &&
                  `Термін здавання: ${moment(deadline).format("DD.MM.YY")} о ${moment(
                    deadline
                  ).format("HH:mm")}`}
              </p>
              <div className="flex justify-end mt-7">
                <button className="submit-btn" type="submit" disabled={isFormDisabled}>
                  Замовити
                </button>
              </div>
            </div>
          </div>
        </form>
      </main>
      <footer className="w-full flex justify-center bg-white">
        <div className="w-full max-w-7xl flex flex-col items-center justify-between py-5 px-15 md:flex-row">
          <div className="text-sm text-gray-600 order-3 text-center md:order-none md:text-left">
            <a className="hover:underline" href="/">
              Договір публічної оферти
            </a>
            <p className="mt-1">© Correctarium</p>
            <p className="mt-1">2015–2021</p>
          </div>
          <img className="h-logo order-1 md:order-none" src={footerLogo} alt="footer-logo" />
          <div className="text-sm text-gray-600 order-2 my-10 text-center md:order-none md:my-0 md:text-left">
            <p className="mb-1">Надіслати текст на переклад:</p>
            <a
              className="hover:underline hover:text-blue-500"
              href="mailto:manager@correctarium.com"
            >
              manager@correctarium.com
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
