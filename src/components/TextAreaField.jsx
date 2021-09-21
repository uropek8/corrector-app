import React from "react";

const TextAreaField = ({ name, value, onChange }) => {
  return (
    <textarea
      className="field-textarea"
      name={name}
      onChange={onChange}
      value={value}
      placeholder="Вставьте текст"
    ></textarea>
  );
}

export default TextAreaField;
