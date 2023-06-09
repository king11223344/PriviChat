import React, { useState } from "react";
import "./Front.css"; // Import the CSS file for styling
import db from "../firebase";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailList, setEmailList] = useState([]);
  const [randomCharacter, setRandomCharacter] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [link, setLink] = useState("");
  const generateRandomCharacter = (length) => {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsEmailValid(true); // Reset the email validation error
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleAddClick = () => {
    if (email && validateEmail(email)) {
      setEmailList([...emailList, email]);
      setEmail("");
    } else {
      setIsEmailValid(false); // Display email validation error
    }
  };
  const handleDeleteClick = (index) => {
    const updatedList = emailList.filter((_, i) => i !== index);
    setEmailList(updatedList);
  };

  function validatePassword(password) {
    if (password.length <= 8) return false;
    const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (!specialCharacters.test(password)) return false;
    if (!/[A-Z]/.test(password)) return false;
    if (!/[a-z]/.test(password)) return false;
    if (!/\d/.test(password)) return false;
    return true;
  }

  // Example usage:

  const handleGenerateClick = () => {
    if (password && validatePassword(password)) {
      const randomChar = generateRandomCharacter(6); // Specify the desired length
      setLink(window.location.href + "rooms" + "/?chatId=" + randomChar);
      const setEmail=new Set(emailList);
      const emailarray=[...setEmail]
      db.collection(randomChar).doc("authorised").set({
        authorised: emailarray,
      });
      db.collection(randomChar).doc("password").set({
        password: password,
      });
      setRandomCharacter(randomChar);
      setIsModalOpen(true);
    }
    else {
      setIsPasswordValid(false); // Display email validation error
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const validateEmail = (email) => {
    // Basic email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="container">
      <div className="header">WhatsApp-like Styling</div>
      <div className="content">
        {/* <div className="random-character-box">{randomCharacter}</div> */}
        <input
          type="text"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter email"
          className={isEmailValid ? "valid-input" : "invalid-input"}
        />
        {!isEmailValid && (
          <div className="error-message">Not a valid email</div>
        )}
        <button className="add-button" onClick={handleAddClick}>
          Add
        </button>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter password"
        />
        {!isPasswordValid && (
          <div className="error-message">
            Password should be atleast 8 character long and should have a character from uppercase and a lowercase alphabets, a digit and a special character
          </div>
        )}
        <div className="email-list">
          <strong>Email List:</strong>
          <ul>
            {emailList.map((email, index) => (
              <li key={index}>
                {email}{" "}
                <span
                  className="delete-button"
                  onClick={() => handleDeleteClick(index)}
                >
                  &times;
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer">
          <button className="generate-button" onClick={handleGenerateClick}>
            Make a chat room
          </button>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseModal}>
              &times;
            </span>
            <div className="modal-text">
              <strong>Your Chatroom link is </strong>
              <a href={link}>Your chatroom link</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default App;
