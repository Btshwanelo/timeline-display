import React from "react";
import PropTypes from "prop-types";
import styles from "../App.module.css";

const TimelineCard = ({ mediaUrl, timeline }) => {
  if (!timeline) {
    return null;
  }

  const { Image, Title, Episode, CreateDate, Category, MediaName, Audio } =
    timeline;

  return (
    <div className={styles.card}>
      <img className={styles.image} src={`${mediaUrl}${Image}`} alt={Title} />
      <div className={styles.content}>
        <h2 className={styles.title}>{Title}</h2>
        {Episode && <p className={styles.episode}>Episode: {Episode}</p>}
        {CreateDate && <p className={styles.date}>Date: {CreateDate}</p>}
        {Category && <p className={styles.category}>Category: {Category}</p>}
        {MediaName && <p className={styles.media}>Media: {MediaName}</p>}
        {Audio && (
          <audio controls className={styles.audio}>
            <source src={`${mediaUrl}${Audio}`} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        )}
      </div>
    </div>
  );
};

TimelineCard.propTypes = {
  timeline: PropTypes.object,
  mediaUrl: PropTypes.string,
};

export default TimelineCard;
