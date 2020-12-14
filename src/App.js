import React, { useState } from "react";
import "./App.css";

let emojiData = {
  "😄": "Grinning Face with Smiling Eyes",
  "😂": "Face with Tears of Joy",
  "😍": "Smiling Face with Heart-Eyes",
  "😩": "Weary Face",
  "😡": "Angry Face ",
  "😉": "Winking Face",
};

let emojis = Object.keys(emojiData);

function App() {
  const [meaning, setMeaning] = useState("Start Typing to Know Meaning");
  let emojiMeans;
  /////////////////////////////////////////////////// Getting Emoji meaning from Database

  let getMeaning = (input) => {
    let meaningFromDB = emojiData[input];

    if (meaningFromDB) {
      return (emojiMeans = meaningFromDB);
    }
    return (emojiMeans =
      "Sorry Currently this is Not available in our Database");
  };

  ///////////////////////////////////////////////////////// Taking Input

  let inputHandler = (event) => {
    let input = event.target.value;
    console.log(input);
    getMeaning(input);
    setMeaning(emojiMeans);
  };

  return (
    <div className="App">
      <div className="content">
        <div className="header">
          <h1 className="logo">
            Emo<span className="logo_col">Preter</span>
          </h1>
        </div>
        <h3 className="title">Type any Emoji to find out its real meaning</h3>
        <input
          className="input"
          onChange={inputHandler}
          placeholder="Type 😀 here"
        />
        <h5 className="meaning">{meaning}</h5>
        <h5 className="text">These are the Emojis in our Database</h5>
        <h6 className="text-sm">(Click on them to know there meaning)</h6>
        <div className="emojiBox">
          {emojis.map((emoji) => {
            return (
              <span
                className="emoji"
                onClick={(event) => {
                  getMeaning(event.target.innerHTML);
                  setMeaning(emojiMeans);
                }}
              >
                {emoji}
              </span>
            );
          })}
        </div>
      </div>
      <footer className="footer">
        <h4 class="foot-text">Made with ❤ by Atishay</h4>
        <h5 class="copy">© 2020</h5>
      </footer>
    </div>
  );
}

export default App;
