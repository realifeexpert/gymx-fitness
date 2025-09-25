import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

import BodyPart from "./BodyPart.jsx";
import ExerciseCard from "./ExerciseCard.jsx";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <div
      onClick={() => scrollPrev()}
      className="p-4 cursor-pointer flex items-center z-10"
    >
      <img src={LeftArrowIcon} alt="left-arrow" className="w-6 h-6" />
    </div>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <div
      onClick={() => scrollNext()}
      className="p-4 cursor-pointer flex items-center z-10"
    >
      <img src={RightArrowIcon} alt="right-arrow" className="w-6 h-6" />
    </div>
  );
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  return (
    <div className="w-full overflow-hidden relative py-2">
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        // ✅ Apply the new class to the wrapper
        wrapperClassName="hide-scrollbar"
      >
        {data.map((item) => (
          <div
            key={item.id || item.exerciseId || item}
            itemID={item.id || item.exerciseId || item} // itemID is required by the library
            title={item.id || item.exerciseId || item}
            className="mx-5" // Use margin for spacing between items
          >
            {isBodyParts ? (
              <BodyPart
                item={item}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
              />
            ) : (
              <ExerciseCard exercise={item} size="small" />
            )}
          </div>
        ))}
      </ScrollMenu>
    </div>
  );
};

export default HorizontalScrollbar;
