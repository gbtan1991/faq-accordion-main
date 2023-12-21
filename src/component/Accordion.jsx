import React, { useState } from "react";
import classNames from "classnames";
import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";

const Accordion = ({ faq, isLastItem, index }) => {
  const [openIndex, setOpenIndex] = useState(-1);

  const handleOpenClick = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };
  const containerClasses = classNames({
    "border-b": !isLastItem,
    "pb-4": !isLastItem,
  });

  const contentClasses = classNames({
    "mt-2": true,
    "px-2": true,
    "fade-in": openIndex === index,
  });
  return (
    <div className={containerClasses}>
      <div className="flex flex-row justify-between items-center space-x-5 py-4 px-2">
        <div>
          <h3 className="text-base/none text-dark-purple font-bold ">
            {faq.question}
          </h3>
        </div>
        <div>
          <button
            className="w-[30px] h-full"
            onClick={() => handleOpenClick(index)}
          >
            <img
              src={openIndex === index ? minusIcon : plusIcon}
              alt={openIndex === index ? "minus icon" : "plus icon"}
              className=""
            />
          </button>
        </div>
      </div>
      {openIndex === index && (
        <div className={contentClasses}>
          <p className="text-sm">{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
