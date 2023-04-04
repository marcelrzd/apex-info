import React, { useEffect, useState } from "react";
// Generate random keys
import { v4 as uuidv4 } from "uuid";
// animations
import { scrollReveal } from "../../animation";
// Styles
import NewsStyles from "../Home/styles/NewsStyles";
import CraftStyles from "./styles/CraftingRotationStyles";
// Components
import Circle from "../../components/Circle";
// images
import replicator from "../../img/replicator.webp";

// hooks
import { useScroll } from "../../components/UseScroll";
import { useDispatch, useSelector } from "react-redux";
import { getCraftingItemsRotation } from "../../actions/rotationsAction";

const CraftingRotation = () => {
  const [element, controls] = useScroll();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCraftingItemsRotation());
  }, [dispatch]);

  //   Get data
  const { crafting } = useSelector((state) => state.crafting);

  // set rarity colors
  // Legendary: #A8983E
  // Epic: #843FA2
  // Rare:  #3E7AA5
  // Common: #666666

  const normalizeString = (name) => {
    const outputString = name
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    return outputString;
  };

  return (
    <CraftStyles.CraftingInfo
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      {crafting ? (
        <>
          <NewsStyles.Description>
            <h2>
              Current <span>crafting</span> rotation
            </h2>
            <CraftStyles.LegendDiv>
              <Circle
                background="#A8983E"
                text="Legendary"
                color="#A8983E"
              ></Circle>
              <Circle background="#843FA2" text="Epic" color="#843FA2"></Circle>
              <Circle background="#3E7AA5" text="Rare" color="#3E7AA5"></Circle>
              <Circle
                background="#666666"
                text="Common"
                color="#666666"
              ></Circle>
            </CraftStyles.LegendDiv>
            <CraftStyles.Cards>
              {crafting.map((craftItem) => (
                <>
                  {craftItem.bundleContent.length > 1 ? (
                    <>
                      <CraftStyles.Card key={uuidv4()}>
                        <CraftStyles.H3SectionTitle>
                          {normalizeString(craftItem.bundleType)}
                        </CraftStyles.H3SectionTitle>
                        <CraftStyles.StyledIconDiv className="icon">
                          <CraftStyles.IconImg
                            src={craftItem.bundleContent[0].itemType.asset}
                          ></CraftStyles.IconImg>
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
                        </CraftStyles.StyledIconDiv>
                        <p>
                          Cost:{" "}
                          <span>
                            {craftItem.bundleContent[0].cost} materials
                          </span>
                        </p>
                      </CraftStyles.Card>
                      <CraftStyles.Card key={uuidv4()}>
                        <CraftStyles.H3SectionTitle>
                          {normalizeString(craftItem.bundleType)}
                        </CraftStyles.H3SectionTitle>
                        <CraftStyles.StyledIconDiv className="icon">
                          <CraftStyles.IconImg
                            src={craftItem.bundleContent[1].itemType.asset}
                          ></CraftStyles.IconImg>
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
                        </CraftStyles.StyledIconDiv>
                        <p>
                          Cost:{" "}
                          <span>
                            {craftItem.bundleContent[1].cost} materials
                          </span>
                        </p>
                      </CraftStyles.Card>
                    </>
                  ) : (
                    <CraftStyles.Card key={uuidv4()}>
                      <CraftStyles.H3SectionTitle>
                        {normalizeString(craftItem.bundleType)}
                      </CraftStyles.H3SectionTitle>
                      <CraftStyles.StyledIconDiv className="icon">
                        <CraftStyles.IconImg
                          src={craftItem.bundleContent[0].itemType.asset}
                        ></CraftStyles.IconImg>
                        <h3
                          style={{
                            background: `${
                              craftItem.bundleContent[0].itemType.rarity ===
                              "Legendary"
                                ? "#A8983E"
                                : craftItem.bundleContent[0].itemType.rarity ===
                                  "Epic"
                                ? "#843FA2"
                                : craftItem.bundleContent[0].itemType.rarity ===
                                  "Rare"
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
                      </CraftStyles.StyledIconDiv>
                      <p>
                        Cost:{" "}
                        <span>{craftItem.bundleContent[0].cost} materials</span>
                      </p>
                    </CraftStyles.Card>
                  )}
                </>
              ))}
            </CraftStyles.Cards>
          </NewsStyles.Description>
          <NewsStyles.Image>
            <img src={replicator} alt="" />
          </NewsStyles.Image>
        </>
      ) : (
        ""
      )}
    </CraftStyles.CraftingInfo>
  );
};

export default CraftingRotation;
