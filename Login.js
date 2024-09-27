import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Web3 from "web3";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [walletAddress, setWalletAddress] = useState("");

  const navigate = useNavigate();

  const onButtonClick = () => {
    setEmailError("");
    setPasswordError("");

    if ("" === email) {
      setEmailError("Please enter your email");
      return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Please enter a valid email");
      return;
    }

    if ("" === password) {
      setPasswordError("Please enter a password");
      return;
    }

    if (password.length < 7) {
      setPasswordError("The password must be 8 characters or longer");
      return;
    }

    // If all validations pass, navigate to the voting page
    navigate('/voting');
  };

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        // Request account access
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setWalletAddress(accounts[0]);
        // Navigate to voting page after successful connection
        navigate('/voting');
      } catch (error) {
        console.error("User denied account access");
      }
    } else {
      console.log('Please install MetaMask!');
    }
  };

  return (
    <div className={"mainContainer"}>
      <div className={"inputContainer"}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          type="password"
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={onButtonClick}
          value={"Log in"}
        />
      </div>
      <br />
      <div className="inputContainer">
          <button onClick={connectWallet} className="metaMaskButton">
            Login with MetaMask
          </button>
        </div>
      {walletAddress && (
        <div className={"walletInfo"}>
          Connected wallet: {walletAddress}
        </div>
      )}
    </div>
  );
};

export default Login;