import React from "react";
import styled from "styled-components";

const EpisodeDiv = styled.div`
  width: 400px;
  border: 2px solid red;
  border-radius: 10px;
  background-color: orange;
  text-align: center;
  margin-bottom: 40px;
`;


export default function EpisodeCard(props) {
  const { name, air_date, episode} = props.episode;
  return (
    <EpisodeDiv className = "episode-card">
      <h2>{name}</h2>
      <h3>Air date: {air_date}</h3>
      <h3>Episode: {episode}</h3>
    </EpisodeDiv>
  );
};
