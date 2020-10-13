import React, { useState } from 'react';
import './TinderCards.css'
import TinderCard from 'react-tinder-card'


const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Richard Hendricks",
      url: "./img/richard.jpg",
    },
    {
      name: "Erlich Bachman",
      url: "./img/erlich.jpg",
    },
    {
      name: "Monica Hall",
      url: "./img/monica.jpg",
    },
    {
      name: "Jared Dunn",
      url: "./img/jared.jpg",
    },
    {
      name: "Dinesh Chugtai",
      url: "./img/dinesh.jpg",
    },
  ]);

  return (
    <div>
      <div className="tinder__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;