import { useState } from "react";
import "./App.css";
import FormInput from "./Components/FormInput";

function App() {
  const [input, setInput] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include special characters",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "email",
      errorMessage: "Should be valid email address",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "birthday",
      label: "Birthday",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "password",
      errorMessage:
        "Password should be 8-20 char and should include atleast 1 letter, 1 number and 1 special char",
      label: "Password",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@$%^&*])[a-zA-Z0-9!@$%^&*]{8,20}$",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match",
      label: "Confirm Password",
      pattern: input.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfuly");
    window.location.reload();
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-red-300 to-indigo-500 flex items-center justify-center">
      <form
        className="bg-white m-5 p-5 lg:px-20 rounded-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="font-bold mb-10 text-4xl text-center">Register</h1>
        {inputs.map((inp) => (
          <FormInput
            key={inp.id}
            {...inp}
            value={input[inp.name]}
            onChange={handleChange}
          />
        ))}

        <button className="w-full p-3 my-3 text-lg cursor-pointer text-center rounded-lg bg-purple-700 ">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
