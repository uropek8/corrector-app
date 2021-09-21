import React, { useState } from "react";

const TextField = ({ legend, type, name, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputOutlineToggle = () => {
    setIsFocused(!isFocused);
  };

  return (
    <fieldset
      className={
        isFocused
          ? "h-full rounded-lg border border-blue-600 select-none"
          : "h-full rounded-lg border border-gray-200 select-none"
      }
    >
      <legend
        className={isFocused ? "h-4 text-xs text-blue-600 ml-6" : "h-4 text-xs text-gray-400 ml-6"}
      >
        {value !== "" && legend}
      </legend>
      <input
        className="field-input"
        type={type}
        name={name}
        onFocus={inputOutlineToggle}
        onBlur={inputOutlineToggle}
        onChange={onChange}
        placeholder={legend}
        value={value}
      />
    </fieldset>
  );
}

export default TextField;
