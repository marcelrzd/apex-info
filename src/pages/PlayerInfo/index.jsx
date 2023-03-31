import React, { useEffect, useRef, useState } from "react";
// Generate random keys
import { v4 as uuidv4 } from "uuid";
// animations
import { scrollReveal } from "../../animation";
// Styles
import NewsStyles from "../Home/styles/NewsStyles";
import PlayerInfoStyles from "./styles/PlayerInfoStyles";

// images
import replicator from "../../img/replicator.webp";

// icons
import psn from "../../img/psn_icon.png";
import xbox from "../../img/xbox.png";
import origin from "../../img/origin.png";

// hooks
import { useScroll } from "../../components/UseScroll";
import { useDispatch, useSelector } from "react-redux";
import { getCraftingItemsRotation } from "../../actions/rotationsAction";
import { getPlayerInfos } from "../../actions/playerInfosActions";

const PlayerInfo = () => {
  const [element, controls] = useScroll();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCraftingItemsRotation());
  }, [dispatch]);

  //   Get data
  const { crafting } = useSelector((state) => state.crafting);

  const normalizeString = (name) => {
    const outputString = name
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    return outputString;
  };

  // handlers
  const [textInput, setTextInput] = useState("");
  // handlers
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(getPlayerInfos(textInput));
    setTextInput("");
    // const updatedListItems = listItems.map((item) => {
    //   return { ...item, class: "" };
    // });
    // setListItems(updatedListItems);
  };

  // Handle custom select
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const selectItems = [
    {
      value: "PS4",
      imgSrc: psn,
      label: "PSN",
    },
    {
      value: "X1",
      imgSrc: xbox,
      label: "Xbox",
    },
    {
      value: "PC",
      imgSrc: origin,
      label: "PC",
    },
  ];
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectRef]);
  const toggleSelect = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleSelectItem = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <>
      <PlayerInfoStyles.FormDiv className="form">
        <form className="search">
          <PlayerInfoStyles.CustomSelect>
            <div className="select-selected" onClick={toggleSelect}>
              {selectedValue && (
                <img
                  src={
                    selectItems.find((item) => item.value === selectedValue)
                      .imgSrc
                  }
                  alt="icon"
                />
              )}
              {selectedValue ? (
                <span>
                  {
                    selectItems.find((item) => item.value === selectedValue)
                      .label
                  }
                </span>
              ) : (
                <span>Platform</span>
              )}
            </div>
            {isOpen && (
              <div className="select-items">
                {selectItems.map((item) => (
                  <div
                    key={item.value}
                    className="select-item"
                    onClick={() => handleSelectItem(item.value)}
                  >
                    <img src={item.imgSrc} alt="" />
                    <PlayerInfoStyles.OptionSpan>
                      {item.label}
                    </PlayerInfoStyles.OptionSpan>
                  </div>
                ))}
              </div>
            )}
            <input type="hidden" name="selected-value" value={selectedValue} />
          </PlayerInfoStyles.CustomSelect>
          <input value={textInput} onChange={inputHandler} type="text" />
          <button type="submit" onClick={submitSearch}>
            Search
          </button>
        </form>
      </PlayerInfoStyles.FormDiv>
      <PlayerInfoStyles.Services
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        {crafting ? (
          <>
            <NewsStyles.Description>
              <h2>
                Player <span>Info</span>
              </h2>
              <PlayerInfoStyles.Cards>
                {crafting.map((craftItem) => (
                  <>
                    {craftItem.bundleContent.length > 1 ? (
                      <>
                        <PlayerInfoStyles.Card key={uuidv4()}>
                          <PlayerInfoStyles.H3SectionTitle>
                            {normalizeString(craftItem.bundleType)}
                          </PlayerInfoStyles.H3SectionTitle>
                          <PlayerInfoStyles.StyledIconDiv className="icon">
                            <PlayerInfoStyles.IconImg
                              src={craftItem.bundleContent[0].itemType.asset}
                            ></PlayerInfoStyles.IconImg>
                            <h3
                              style={{
                                background: `${
                                  craftItem.bundleContent[0].itemType.rarity ===
                                  "Legendary"
                                    ? "#A8983E"
                                    : craftItem.bundleContent[0].itemType
                                        .rarity === "Epic"
                                    ? "#843FA2"
                                    : craftItem.bundleContent[0].itemType
                                        .rarity === "Rare"
                                    ? "#3E7AA5"
                                    : "#666666"
                                }`,
                                // `${craftItem.bundleContent[0].itemType.rarityHex}`,
                                color: "white",
                                width: "70%",
                              }}
                            >
                              {normalizeString(
                                craftItem.bundleContent[0].itemType.name
                              )}
                            </h3>
                          </PlayerInfoStyles.StyledIconDiv>
                          <p>
                            Cost:{" "}
                            <span>
                              {craftItem.bundleContent[0].cost} materials
                            </span>
                          </p>
                        </PlayerInfoStyles.Card>
                        <PlayerInfoStyles.Card key={uuidv4()}>
                          <PlayerInfoStyles.H3SectionTitle>
                            {normalizeString(craftItem.bundleType)}
                          </PlayerInfoStyles.H3SectionTitle>
                          <PlayerInfoStyles.StyledIconDiv className="icon">
                            <PlayerInfoStyles.IconImg
                              src={craftItem.bundleContent[1].itemType.asset}
                            ></PlayerInfoStyles.IconImg>
                            <h3
                              style={{
                                background: `${
                                  craftItem.bundleContent[1].itemType.rarity ===
                                  "Legendary"
                                    ? "#A8983E"
                                    : craftItem.bundleContent[1].itemType
                                        .rarity === "Epic"
                                    ? "#843FA2"
                                    : craftItem.bundleContent[1].itemType
                                        .rarity === "Rare"
                                    ? "#3E7AA5"
                                    : "#666666"
                                }`,
                                color: "white",
                                width: "70%",
                              }}
                            >
                              {normalizeString(
                                craftItem.bundleContent[1].itemType.name
                              )}
                            </h3>
                          </PlayerInfoStyles.StyledIconDiv>
                          <p>
                            Cost:{" "}
                            <span>
                              {craftItem.bundleContent[1].cost} materials
                            </span>
                          </p>
                        </PlayerInfoStyles.Card>
                      </>
                    ) : (
                      <PlayerInfoStyles.Card key={uuidv4()}>
                        <PlayerInfoStyles.H3SectionTitle>
                          {normalizeString(craftItem.bundleType)}
                        </PlayerInfoStyles.H3SectionTitle>
                        <PlayerInfoStyles.StyledIconDiv className="icon">
                          <PlayerInfoStyles.IconImg
                            src={craftItem.bundleContent[0].itemType.asset}
                          ></PlayerInfoStyles.IconImg>
                          <h3
                            style={{
                              background: `${
                                craftItem.bundleContent[0].itemType.rarity ===
                                "Legendary"
                                  ? "#A8983E"
                                  : craftItem.bundleContent[0].itemType
                                      .rarity === "Epic"
                                  ? "#843FA2"
                                  : craftItem.bundleContent[0].itemType
                                      .rarity === "Rare"
                                  ? "#3E7AA5"
                                  : "#666666"
                              }`,
                              color: "white",
                              width: "70%",
                            }}
                          >
                            {normalizeString(
                              craftItem.bundleContent[0].itemType.name
                            )}
                          </h3>
                        </PlayerInfoStyles.StyledIconDiv>
                        <p>
                          Cost:{" "}
                          <span>
                            {craftItem.bundleContent[0].cost} materials
                          </span>
                        </p>
                      </PlayerInfoStyles.Card>
                    )}
                  </>
                ))}
              </PlayerInfoStyles.Cards>
            </NewsStyles.Description>
            <NewsStyles.Image>
              <img src={replicator} alt="" />
            </NewsStyles.Image>
          </>
        ) : (
          ""
        )}
      </PlayerInfoStyles.Services>
    </>
  );
};

export default PlayerInfo;
