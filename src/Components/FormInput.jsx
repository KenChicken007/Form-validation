import { useState } from "react";

const FormInput = (props) => {
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };
  return (
    <div className="flex flex-col m-5 lg:w-96 text-center">
      <label className=" text-lg text-start mb-1">{label}</label>
      <input
        className="w-full p-2 border-2 border-gray-400 rounded-lg"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span className="text-s text-red-600 hidden">{errorMessage}</span>
    </div>
  );
};

export default FormInput;
