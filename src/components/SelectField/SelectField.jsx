import React, { useState, useEffect, useRef } from "react";
import arrowSrc from "../../assets/img/svg/arrow_down.svg";

function SelectField({ legend, name, options, value, onChange }) {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const elementRef = useRef(null);

  const handleServiceFocus = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const handleRadioFocus = (e) => {
    onChange(e);
    
    setIsSelectOpen(false);
  };

  const parseOptionName = (value) => {
    let name = '';
    
    options.forEach(option => {
      if (option.value === value) {
        name = option.name;
      }
    });

    return name;
  }

  useEffect(() => {
    const checkOutsideClick = (e) => {
      if (isSelectOpen && elementRef.current && !elementRef.current.contains(e.target)) {
        setIsSelectOpen(!isSelectOpen);
      }
    };
    document.addEventListener("mousedown", checkOutsideClick);
    return () => {
      document.removeEventListener("mousedown", checkOutsideClick);
    };
  }, [isSelectOpen]);

  return (
    <fieldset
      className={
        isSelectOpen
          ? "h-full rounded-lg border border-blue-600 select-none"
          : "h-full rounded-lg border border-gray-200 select-none"
      }
      ref={elementRef}
    >
      <legend className="h-4 text-xs text-gray-400 ml-6">{value !== "" && legend}</legend>
      <input
        className="sr-only"
        id={name}
        type="checkbox"
        onFocus={handleServiceFocus}
        value={value}
      />
      <label
        className={value !== "" ? "field-label text-black" : "field-label text-gray-400"}
        htmlFor={name}
      >
        {value !== "" ? parseOptionName(value) : legend}
        <img className="w-2 h-2" src={arrowSrc} />
      </label>
      <div className={isSelectOpen ? "field-list z-10 flex" : "field-list z-10 hidden"}>
        {options.length &&
          options.map((item) => {
            return (
              <label
                className="relative cursor-pointer text-sm font-medium px-5 leading-8 hover:bg-gray-200"
                htmlFor={item.value}
                key={item.value}
              >
                <input
                  className="sr-only"
                  id={item.value}
                  type="radio"
                  name={name}
                  onFocus={handleRadioFocus}
                  value={item.value}
                />
                {item.name}
              </label>
            );
          })}
      </div>
    </fieldset>
  );
}

export default SelectField;
