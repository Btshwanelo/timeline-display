import React from "react";
import PropTypes from "prop-types";
import styles from "../App.module.css";
import TimelineCard from "../components/TimelineCard";

const OneRecord = ({ timeline, mediaUrl }) => (
  <div className={styles.containerContent}>
    <TimelineCard mediaUrl={mediaUrl} timeline={timeline} />
  </div>
);

OneRecord.propTypes = {
  timeline: PropTypes.object,
  mediaUrl: PropTypes.string,
};

export default OneRecord;
