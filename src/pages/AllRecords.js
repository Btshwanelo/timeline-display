import React from "react";
import PropTypes from "prop-types";
import styles from "../App.module.css";
import TimelineCard from "../components/TimelineCard";

const AllRecords = ({ timelineData, mediaUrl }) => {
  if (!Array.isArray(timelineData) || timelineData.length === 0) {
    return <div>No records available.</div>;
  }

  return (
    <div className={styles.containerContent}>
      {timelineData.map((item) => (
        <TimelineCard key={item.id} mediaUrl={mediaUrl} timeline={item} />
      ))}
    </div>
  );
};

AllRecords.propTypes = {
  timelineData: PropTypes.array.isRequired,
  mediaUrl: PropTypes.string,
};

export default AllRecords;
