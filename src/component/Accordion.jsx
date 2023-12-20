import React, { useState } from "react";
import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";

const Accordion = ({ faq, isLastItem, index }) => {
  const [openIndex, setOpenIndex] = useState(-1);

  const handleOpenClick = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  const borderStyling = `${isLastItem ? " border-b-0" : "border-b pb-4"}`;
  return (
    <div className={borderStyling}>
      <div className="flex flex-row justify-between items-center space-x-5 py-4 px-2">
        <div>
          <h3 className="text-base/none text-dark-purple font-bold ">
            {faq.question}
          </h3>
        </div>
        <div>
          <button className="w-[30px] h-full" onClick={() => handleOpenClick(index)}>
            <img
              src={openIndex === index ? minusIcon : plusIcon}
              alt={openIndex === index ? "minus icon" : "plus icon"}
              className=""
            />
          </button>
        </div>
      </div>
      {openIndex === index && (
        <div className="mt-2 px-2">
          <p className="text-sm">{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;