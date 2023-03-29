import React, { useEffect, useState } from "react";
// animations
import { scrollReveal } from "../../animation";
import { motion } from "framer-motion";
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
  const [element, controls] = useScroll();

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
  const initialTime = {
    hours: remainingTime.split(":")[0],
    minutes: remainingTime.split(":")[1],
    seconds: remainingTime.split(":")[2],
  };
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft.seconds > 0) {
        setTimeLeft({ ...timeLeft, seconds: timeLeft.seconds - 1 });
      } else if (timeLeft.minutes > 0) {
        setTimeLeft({
          hours: timeLeft.hours,
          minutes: timeLeft.minutes - 1,
          seconds: 59,
        });
      } else if (timeLeft.hours > 0) {
        setTimeLeft({ hours: timeLeft.hours - 1, minutes: 59, seconds: 59 });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      {brMap.current ? (
        <>
          <NewsStyles.Description>
            <h2>
              Current BR map: <br />
              <span>{brMap.current.map}</span>
            </h2>
            <Cards>
              <Card>
                <MapStyles.StyledIconDiv className="icon">
                  <FontAwesomeIcon icon={faHourglassEnd} />
                  <h3>Ends in</h3>
                </MapStyles.StyledIconDiv>
                <p>
                  {`${timeLeft.hours}h:${timeLeft.minutes}m:${formatTime(
                    timeLeft.seconds
                  )}s`}
                </p>
              </Card>
              <Card>
                <MapStyles.StyledIconDiv className="icon">
                  <FontAwesomeIcon icon={faMap} />
                  <h3>Next Map</h3>
                </MapStyles.StyledIconDiv>
                <p>{brMap.next.map}</p>
              </Card>
              <Card>
                <MapStyles.StyledIconDiv className="icon">
                  <FontAwesomeIcon icon={faClock} />
                  <h3>Duration</h3>
                </MapStyles.StyledIconDiv>
                <p>{brMap.current.DurationInMinutes} min</p>
              </Card>
            </Cards>
          </NewsStyles.Description>
          <NewsStyles.Image>
            <img src={mapImg} alt="" />
          </NewsStyles.Image>
        </>
      ) : (
        ""
      )}
    </Services>
  );
};

const Services = styled(motion.div)`
  max-height: 65vh;
  height: 65vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default MapRotation;
