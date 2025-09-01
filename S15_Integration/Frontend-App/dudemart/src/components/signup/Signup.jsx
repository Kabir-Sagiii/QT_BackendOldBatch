import { useState } from "react";
import "./Signup.css";
import { getUserData } from "./Signup";

const Signup = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
    email: "",
    city: "",
    gender: "",
  });

  const getGender = (event) => {
    if (event.target.value === "male") {
      setState({
        ...state,
        gender: event.target.value,
      });
    } else if (event.target.value === "female") {
      setState({
        ...state,
        gender: event.target.value,
      });
    } else {
      setState({
        ...state,
        gender: event.target.value,
      });
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Sign Up</h2>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={state.username}
          onChange={(event) => {
            setState({
              ...state,
              username: event.target.value,
            });
          }}
          name="username"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={state.password}
          onChange={(event) => {
            setState({
              ...state,
              password: event.target.value,
            });
          }}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={state.email}
          onChange={(event) => {
            setState({
              ...state,
              email: event.target.value,
            });
          }}
        />

        <label>Gender</label>
        <div className="gender-options">
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={getGender}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={getGender}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="other"
              onChange={getGender}
            />
            Other
          </label>
        </div>

        <label htmlFor="city">City</label>
        <select
          id="city"
          name="city"
          value={state.city}
          onChange={(event) => {
            setState({
              ...state,
              city: event.target.value,
            });
          }}
        >
          <option value="">Select City</option>
          <option value="pune">Pune</option>
          <option value="hyderabad">Hyderabad</option>
          <option value="bangalore">Bangalore</option>
          <option value="delhi">Delhi</option>
          <option value="chennai">Chennai</option>
        </select>

        <button
          type="button"
          onClick={() => {
            getUserData(state);
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
