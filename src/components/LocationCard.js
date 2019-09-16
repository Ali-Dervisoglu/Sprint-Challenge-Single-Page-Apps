import React from "react";
import styled from "styled-components";

const LocationDiv = styled.div`
  width: 400px;
  border: 2px solid red;
  border-radius: 10px;
  background-color: orange;
  text-align: center;
  margin-bottom: 40px;
`;

export default function LocationCard(props) {
  const { name, type, dimension} = props.location;
  return (
    <LocationDiv>
    <div className = "location-card">
      <h2>{name}</h2>
      <h3>{type}</h3>
      <h3>{dimension}</h3>
    </div>
    </LocationDiv>

  )
}
