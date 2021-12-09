import React from "react";
import "./styles.css";

const emojiMap = {
  "🤣": "Laughing very hard",
  "😇": "Angelic smiling face",
  "😍": "Smiling face with Heart-Eyes",
  "❤️": "Heart for love",
  "🤗": "Huggin face",
  "😪": "Sleepy face",
  "😏": "Smirking face",
  "😒": "Unamused face",
  "✌️": "Peace sign",
  "🤡": "Clown face"
};
const emojiArray = Object.keys(emojiMap);

export default function App() {
  const state = React.useState("Select or input an emoji");
  const emojiText = state[0];
  const setEmojiText = state[1];

  function emojiClickHandle(emoji) {
    const text = emojiMap[emoji];
    setEmojiText(text);
  }

  function handleChange(event) {
    const inputText = event.target.value;
    emojiClickHandle(inputText);
  }

  return (
    <div className="App">
      <h1>Emoji Translator</h1>
      <input type="text" onChange={handleChange} />
      <div>{emojiText === undefined ? "Emoji Not Found!!" : emojiText}</div>
      {emojiArray.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandle(emoji)}
            style={{
              fontSize: "2rem",
              padding: "0.5rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
