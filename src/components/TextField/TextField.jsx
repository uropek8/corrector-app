import React, { useState } from "react";

function TextField({ legend, type, name, value, onChange }) {
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
        className="w-full h-15 text-sm font-medium rounded-lg border-transparent bg-transparent p-5 -mt-2 placeholder-gray-400 focus:shadow-none focus:ring-0 focus:border-transparent"
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
