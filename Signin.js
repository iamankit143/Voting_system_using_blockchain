import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  const [name, setName] = useState("");
  const [fathersName, setFathersName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const handleName = (e) => setName(e.target.value);
  const handleFathersName = (e) => setFathersName(e.target.value);
  const handleDob = (e) => setDob(e.target.value);
  const handleGender = (e) => setGender(e.target.value);
  const handleNationality = (e) => setNationality(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePhoneNumber = (e) => setPhoneNumber(e.target.value);
  const handleOtp = (e) => setOtp(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      fathersName === "" ||
      dob === "" ||
      gender === "" ||
      nationality === "" ||
      email === "" ||
      phoneNumber === "" ||
      otp === ""
    ) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  const sendOtp = () => {
    // Simulate OTP sending process
    if (phoneNumber) {
      setOtpSent(true);
      // You would typically make an API call here to send OTP to the phoneNumber
      alert("OTP sent to " + phoneNumber);
    }
  };

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className="form">
      <div className="title">
        <legend className="title-text">New User</legend>
      </div>

      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form className="details-form">
        <div className="inputContainer">
          <input
            onChange={handleName}
            className="inputBox"
            value={name}
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className="inputContainer">
          <input
            onChange={handleFathersName}
            className="inputBox"
            value={fathersName}
            type="text"
            placeholder="Enter your father's name"
          />
        </div>
        <div className="inputContainer">
          <input
            onChange={handleDob}
            className="inputBox"
            value={dob}
            type="date"
            placeholder="Enter your date of birth"
          />
        </div>
        <div className="inputContainer">
          <select onChange={handleGender} className="inputBox" value={gender}>
            <option value="">Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="inputContainer">
          <input
            onChange={handleNationality}
            className="inputBox"
            value={nationality}
            type="text"
            placeholder="Enter your nationality"
          />
        </div>
        <div className="inputContainer">
          <input
            onChange={handleEmail}
            className="inputBox"
            value={email}
            type="email"
            placeholder="Enter your email address"
          />
        </div>
        <div className="inputContainer">
          <input
            onChange={handlePhoneNumber}
            className="inputBox"
            value={phoneNumber}
            type="text"
            placeholder="Enter your phone number"
          />
          <button type="button" onClick={sendOtp} disabled={!phoneNumber}>
            Send OTP
          </button>
        </div>
        {otpSent && (
          <div className="inputContainer">
            <input
              onChange={handleOtp}
              className="inputBox"
              value={otp}
              type="text"
              placeholder="Enter OTP"
            />
          </div>
        )}

        <Link to="/login">
          <button onClick={handleSubmit} className="signin-btn" type="submit">
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Signin;