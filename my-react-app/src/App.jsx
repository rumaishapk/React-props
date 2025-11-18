import React from "react";
import emojipedia from "./emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((emoji, index) => (
          <div className="term">
            <dt>
              <span className="emoji" role="img" aria-label="Tense Biceps">
                {emoji.emoji}
              </span>
              <span >{emoji.name}</span>
            </dt>
            <dd>
              {emoji.meaning}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default App;
