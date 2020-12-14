import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from './Convert';

// api key google translate AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM



const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
            <label>Enter some text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      /><hr></hr>
      <h3 className='ui header'>
          <Convert text={text} language={language}/>
      </h3>
    </div>
  );
};

export default Translate;
