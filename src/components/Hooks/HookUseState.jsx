import React, { useState } from "react";

//Redux
import { useSelector } from "react-redux";

const HookUseState = () => {
  //redux
  const counterValue = useSelector((state) => state.counterSlice.value);

  const darkMode = useSelector((state) => state.themeSlice.isDarkMode);

  // const [value, setValue] = useState(0);

  // const [inputValue, setInputValue] = useState("");

  // const IncreaseCounter = () => {
  //   setValue(value + 1);
  // };

  // const changeHandler = (e) => {
  //   setInputValue(e.target.value);
  // };

  // const inputNameHandler = () => {
  //   console.log(inputValue);
  // };

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
  };

  const [formData, setFormData] = useState(initialValues);

  const { firstName, lastName, email } = formData;

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(formData);
    setFormData(initialValues);
  };

  const sty = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "4px",
  };

  return (
    <div>
      <strong>use State Hook</strong>
      {/* <p>{value}</p>
      <br />
      <button onClick={IncreaseCounter}>Increase</button>
      <br />
      <input
        type="text"
        placeholder="Enter Text"
        name="inputName"
        onChange={changeHandler}
      />

      <br />

      <button on onClick={inputNameHandler}>
        Display Name in Console
      </button> */}

      <form style={{ margin: "20px" }}>
        <label style={sty}>
          First Name
          <input
            type="text"
            placeholder="FirstName"
            name="firstName"
            value={firstName}
            onChange={changeHandler}
            required
          />
        </label>
        <br />
        <label style={sty}>
          Last Name
          <input
            type="text"
            placeholder="LastName"
            name="lastName"
            value={lastName}
            onChange={changeHandler}
          />
        </label>
        <br />
        <label style={sty}>
          Email
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={changeHandler}
          />
        </label>
        <br />
        <button
          style={{ width: "100%", padding: "4px" }}
          type="submit"
          onSubmit={submitHandler}
        >
          Submit
        </button>
      </form>
      <br />
      {counterValue}
      <br />
      <p>{darkMode ? "🤍" : "🩶"}</p>
    </div>
  );
};

export default React.memo(HookUseState);
