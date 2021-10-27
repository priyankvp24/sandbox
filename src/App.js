// myComponent.js

import { useState } from "react";
import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import Child from "./ChildComponent";
import { data } from "./data";
import { subData } from "./sub-data";
import "./styles.css";

export default function App(props) {
  const [bubble, setBubble] = useState("");
  const [backToInterest, setBackToInterest] = useState(false);

  const options = {
    size: 80,
    minSize: 20,
    gutter: 18,
    provideProps: true,
    numCols: 6,
    fringeWidth: 45,
    yRadius: 100,
    xRadius: 100,
    cornerRadius: 50,
    showGuides: false,
    compact: true,
    gravitation: 5
  };

  const handleClick = (bub) => {
    setBubble(bub);
  };

  const children = data?.map((data, i) => {
    return (
      <Child
        data={!backToInterest ? data : subData[bubble]}
        className="child"
        key={i}
        setClick={handleClick}
        goInner={setBackToInterest}
      />
    );
  });

  return (
    <>
      <div>
        <button onClick={() => setBackToInterest(false)}>Back</button> &nbsp;{" "}
        {!backToInterest ? "Personal Interest" : "Back to interest"}
      </div>
      <br />
      <BubbleUI
        options={options}
        className={!backToInterest ? "myBubbleUI" : "interestBubbleUI"}
      >
        {children}
      </BubbleUI>
      <div>Clicked bubble: {bubble}</div>
    </>
  );
}
