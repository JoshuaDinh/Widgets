import React, { useState } from "react";
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";
import Translate from "./Components/Translate";
import Route from "./Components/Route";
import Header from "./Components/Header";

const items = [
  {
    Title: "What Is React",
    content: "React Is A Front-End Framework",
  },
  {
    Title: "Why use React",
    content: "React Is A Favolrite Framework",
  },
  {
    Title: "How Do You use React",
    content: "React Is made with components",
  },
];

const options = [
  {
    label: "The color Red",
    value: "red",
  },
  {
    label: "The color Green",
    value: "green",
  },
  {
    label: "The color Blue",
    value: "blue",
  },
];


const App = () => {
  const [ selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header/>
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown 
        label= 'select a color'
        options={options}
        selected={selected}
        onSelectedChange={setSelected} />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
