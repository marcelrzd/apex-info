import React, { useEffect, useState } from "react";

// Styles
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
import kings from "../../img/kings-canyon.png";

// hooks
import { useDispatch, useSelector } from "react-redux";
import { getBrMapRotation } from "../../actions/rotationsAction";
import { useScroll } from "../../components/UseScroll";

// Animations
import { pageAnimation, scrollReveal } from "../../animation";
import { motion } from "framer-motion";

const MapRotation = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBrMapRotation());
  }, [dispatch]);

  //   Get data
  const { brMap } = useSelector((state) => state.brMap);
  const { theme } = useSelector((state) => state.theme);

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
  if (mapName === "Kings Canyon") {
    mapImg = kings;
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
    <MapStyles.MapInfo
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="flex items-center justify-between px-20 py-10"
    >
      {brMap.current ? (
        <>
          <NewsStyles.Description className="">
            <h2 className={`${theme === "light" ? "text-gray-600" : ""} pb-20`}>
              Current BR map: <br />
              <span>{brMap.current.map}</span>
            </h2>
            <motion.div className="flex flex-col items-center justify-between md:flex-row xl:grid xl:grid-cols-2">
              <motion.div className="flex flex-initial items-center justify-between w-[20rem]">
                <motion.div className="flex items-center">
                  <FontAwesomeIcon
                    className="text-primary text-[3rem]"
                    icon={faHourglassEnd}
                  />
                  <h3
                    className={`${
                      theme === "light" ? "text-gray-600" : ""
                    } ml-4 text-xl   p-4 w-[90px]`}
                  >
                    Ends in
                  </h3>
                </motion.div>

                <p>
                  {`${timeLeft.hours}h:${timeLeft.minutes}m:${formatTime(
                    timeLeft.seconds
                  )}s`}
                </p>
              </motion.div>
              <motion.div className="flex flex-initial items-center justify-between w-[20rem]">
                <motion.div className="flex items-center">
                  <FontAwesomeIcon
                    className="text-primary text-[3rem]"
                    icon={faMap}
                  />
                  <h3
                    className={`${
                      theme === "light" ? "text-gray-600" : ""
                    } ml-4 text-xl   p-4 w-[90px]`}
                  >
                    Next Map
                  </h3>
                </motion.div>
                <p className="ml-2 text-[1.27rem] ">{brMap.next.map}</p>
              </motion.div>
              <motion.div className="flex flex-initial items-center justify-between w-[20rem]">
                <motion.div className="flex items-center">
                  <FontAwesomeIcon
                    className="text-primary text-[3rem]"
                    icon={faClock}
                  />
                  <h3
                    className={`${
                      theme === "light" ? "text-gray-600" : ""
                    } ml-4 text-xl   p-4 w-[90px]`}
                  >
                    Duration
                  </h3>
                </motion.div>
                <p className="w-[100px]">
                  {brMap.current.DurationInMinutes} min
                </p>
              </motion.div>
            </motion.div>
          </NewsStyles.Description>
          <NewsStyles.Image>
            <img src={mapImg} alt="map pic" className="xlmax-w-[690px]" />
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
