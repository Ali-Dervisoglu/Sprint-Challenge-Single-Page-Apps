import React from "react";

export default function CharacterCard(props) {
  const { name, status } = props.character;
  return (
    <div className = "character-card">
      <h2>{name}</h2>
      <h3>{status}</h3>
    </div>
  );
};
