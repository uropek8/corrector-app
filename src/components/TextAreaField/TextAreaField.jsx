import React from "react";

function TextAreaField({ name, value, onChange }) {
  return (
    <>
      <textarea
        className="field-textarea"
        name={name}
        onChange={onChange}
        value={value}
        placeholder="Вставьте текст"
      ></textarea>
      {/* {!value && (
        <div className="absolute top-5 left-7">
          <span className="text-gray-400 text-sm font-medium">Вставьте текст</span>
        </div>
      )} */}
    </>
  );
}

export default TextAreaField;
