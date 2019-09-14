import React from "react";

export default function CharacterCard(props) {
  const { name, status, species, gender, location, image} = props.character;
  return (
    <div className = "character-card">
      <h2>{name}</h2>
      <h4>Status: {status}</h4>
    </div>
  );
};
