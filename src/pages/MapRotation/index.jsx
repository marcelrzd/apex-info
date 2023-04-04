import React, { useEffect, useState } from "react";

// Styles
import styled from "styled-components";
import NewsStyles from "../Home/styles/NewsStyles";
import MapStyles from "./styles/MapRotationStyles";
// Icons
import { faClock, faMap } from "@fortawesome/free-regular-svg-icons";
import { faHourglassEnd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// images
import stormPoint from "../../img/storm-point.jpeg";
import brokenMoon from "../../img/broken-moon.jpeg";
import worldsEdge from "../../img/worlds-edge.webp";
import olympus from "../../img/olympus.png";

// hooks
import { useScroll } from "../../components/UseScroll";
import { useDispatch, useSelector } from "react-redux";
import { getBrMapRotation } from "../../actions/rotationsAction";

const MapRotation = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBrMapRotation());
  }, [dispatch]);

  //   Get data
  const { brMap } = useSelector((state) => state.brMap);

  // Creating variables after data is fetched from the api
  let remainingTime = "";
  let mapName = "";
  let mapImg = "";
  if (brMap.current) {
    remainingTime = brMap.current.remainingTimer;
    mapName = brMap.current.map;
  }
  // change map img
  if (mapName === "Storm Point") {
    mapImg = stormPoint;
  }
  if (mapName === "Broken Moon") {
    mapImg = brokenMoon;
  }
  if (mapName === "World's Edge") {
    mapImg = worldsEdge;
  }
  if (mapName === "Olympus") {
    mapImg = olympus;
  }

  // creating a countdown to map change
  const [timeLeft, setTimeLeft] = useState(null);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (remainingTime === null) {
      return;
    }

    const initialTime = {
      hours: remainingTime.split(":")[0],
      minutes: remainingTime.split(":")[1],
      seconds: remainingTime.split(":")[2],
    };
    setTimeLeft(initialTime);

    if (intervalId === null) {
      const id = setInterval(() => {
        setTimeLeft((prevTime) => {
          const newTimeLeft = { ...prevTime };
          if (newTimeLeft.seconds > 0) {
            newTimeLeft.seconds--;
          } else if (newTimeLeft.minutes > 0) {
            newTimeLeft.minutes--;
            newTimeLeft.seconds = 59;
          } else if (newTimeLeft.hours > 0) {
            newTimeLeft.hours--;
            newTimeLeft.minutes = 59;
            newTimeLeft.seconds = 59;
          } else {
            clearInterval(intervalId);
          }
          return newTimeLeft;
        });
      }, 1000);
      setIntervalId(id);
    }
    return () => {
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
    };
  }, [remainingTime, intervalId]);

  if (timeLeft === null) {
    return <div style={{ color: "white" }}>Loading...</div>;
  }

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <MapStyles.MapInfo>
      {brMap.current ? (
        <>
          <NewsStyles.Description>
            <h2>
              Current BR map: <br />
              <span>{brMap.current.map}</span>
            </h2>
            <MapStyles.Cards>
              <MapStyles.Card>
                <MapStyles.StyledIconDiv className="icon">
                  <FontAwesomeIcon icon={faHourglassEnd} />
                  <h3 style={{ width: "100px" }}>Ends in</h3>
                </MapStyles.StyledIconDiv>
                <p>
                  {`${timeLeft.hours}h:${timeLeft.minutes}m:${formatTime(
                    timeLeft.seconds
                  )}s`}
                </p>
              </MapStyles.Card>
              <MapStyles.Card>
                <MapStyles.StyledIconDiv className="icon">
                  <FontAwesomeIcon icon={faMap} />
                  <h3 style={{ width: "100px" }}>Next Map</h3>
                </MapStyles.StyledIconDiv>
                <p>{brMap.next.map}</p>
              </MapStyles.Card>
              <MapStyles.Card>
                <MapStyles.StyledIconDiv className="icon">
                  <FontAwesomeIcon icon={faClock} />
                  <h3 style={{ width: "100px" }}>Duration</h3>
                </MapStyles.StyledIconDiv>
                <p>{brMap.current.DurationInMinutes} min</p>
              </MapStyles.Card>
            </MapStyles.Cards>
          </NewsStyles.Description>
          <NewsStyles.Image>
            <img src={mapImg} alt="" />
          </NewsStyles.Image>
          <div style={{ height: "40px" }}></div>
        </>
      ) : (
        ""
      )}
    </MapStyles.MapInfo>
  );
};

export default MapRotation;
