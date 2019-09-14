import React from "react";
import styled from "styled-components";

const CharacterDiv = styled.div`
  width: 400px;
  border: 2px solid red;
  border-radius: 10px;
  background-color: orange;
  text-align: center;
  margin-bottom: 40px;
`;

export default function CharacterCard(props) {
  const { name, status, species, gender, image} = props.character;
  return (
    <CharacterDiv className="characterWrapper">
            <h1>{name}</h1>
            <img src={image} />
            <h2>{status}</h2>
            <h3>{species}</h3>
            <h3>{gender}</h3>
    </CharacterDiv>
  );
};
