import React, { useContext } from "react";
import { Box } from "@mui/material";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

// 🔹 Left Arrow
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Box
      onClick={() => scrollPrev()}
      sx={{
        cursor: "pointer",
        px: 1.5,
        display: "flex",
        alignItems: "center",
        zIndex: 1,
      }}
    >
      <img src={LeftArrowIcon} alt="left-arrow" style={{ width: "24px" }} />
    </Box>
  );
};

// 🔹 Right Arrow
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Box
      onClick={() => scrollNext()}
      sx={{
        cursor: "pointer",
        px: 1.5,
        display: "flex",
        alignItems: "center",
        zIndex: 1,
      }}
    >
      <img src={RightArrowIcon} alt="right-arrow" style={{ width: "24px" }} />
    </Box>
  );
};

// 🔹 Scrollable Component
const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        position: "relative",
        py: "10px",
      }}
    >
      <ScrollMenu
        LeftArrow={<LeftArrow />}
        RightArrow={<RightArrow />}
        wrapperClassName="scroll-wrapper"
      >
        {data.map((item) => (
          <Box
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
            sx={{
              m: "0 10px",
              display: "inline-block",
            }}
          >
            {isBodyParts ? (
              <BodyPart
                item={item}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
              />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </Box>
        ))}
      </ScrollMenu>
    </Box>
  );
};

export default HorizontalScrollbar;
