import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url: "https://cdn.siasat.com/wp-content/uploads/2020/09/Elon-Musk.jpg",
      // url: "https://media.gettyimages.com/id/1288827929/photo/tesla-head-elon-musk-arrives-to-have-a-look-at-the-construction-site-of-the-new-tesla.jpg?s=612x612&w=gi&k=20&c=4Vp61CHC8168TfPU1GHUThlsherokm-iPEPXxSXPnxU=",
    },
    {
      name: "Jeff Bezos",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWPm7o7TOf72ow7s-x066ZlhOnxRd7kKSdzg&usqp=CAU",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing:" + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
