import React, { useState, useEffect, Suspense } from "react";
import styles from "./App.module.css";

const AllRecords = React.lazy(() => import("./pages/AllRecords"));
const OneRecord = React.lazy(() => import("./pages/OneRecord"));

function App() {
  const [timelineData, setTimelineData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tab, setTab] = useState(1);

  const baseUrl = "https://arthurfrost.qflo.co.za/php/getTimeline.php";
  const mediaUrl = "https://arthurfrost.qflo.co.za/";

  useEffect(() => {
    function fetchData() {
      setIsLoading(true);
      setError(null);

      const xhr = new XMLHttpRequest();
      xhr.open("GET", baseUrl, true);

      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const data = JSON.parse(xhr.responseText);
            setTimelineData(data.Timeline);
          } catch (e) {
            setError("Error parsing JSON");
          }
        } else {
          setError(`HTTP error! status: ${xhr.status}`);
        }
        setIsLoading(false);
      };

      xhr.onerror = function () {
        setError("Error during the request");
        setIsLoading(false);
      };

      xhr.send();
    }

    fetchData();
  }, []);

  const foundItem = timelineData.find((item) => item.Id === 227);

  if (isLoading) {
    return <div className={styles.loader}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.timelineHeading}>Timeline Data</h2>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={() => setTab(1)}>
          Record-227
        </button>
        <button className={styles.button} onClick={() => setTab(2)}>
          All records
        </button>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        {tab === 1 && foundItem ? (
          <OneRecord timeline={foundItem} mediaUrl={mediaUrl} />
        ) : tab === 1 ? (
          <div>Record not found</div>
        ) : null}
        {tab === 2 && (
          <AllRecords timelineData={timelineData} mediaUrl={mediaUrl} />
        )}
      </Suspense>
    </div>
  );
}

export default App;
