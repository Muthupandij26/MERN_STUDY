import React, { useState } from "react";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url: "",
    },
  ]);
  return <div>I'm a TinderCards</div>;
}

export default TinderCards;
