import React from "react";

export default function EpisodeCard(props) {
  const { name, air_date} = props.episode;
  return (
    <div className = "episode-card">
      <h2>{name}</h2>
      <h3>{air_date}</h3>
    </div>
  );
};
