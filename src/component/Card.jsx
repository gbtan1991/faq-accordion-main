import React, { useState } from "react";
import starIcon from "../assets/images/icon-star.svg";
import Accordion from "./Accordion";

const Card = ({ faqList }) => {


  return (
    <div className="absolute z-10 top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 bg-white rounded-lg w-[325px] sm:w-[600px]  flex flex-col gap-2">
      <div className="flex flex-row gap-5">
        <img src={starIcon} alt="star icon" className="w-7" />
        <h1 className="text-3xl text-dark-purple font-theme font-bold">FAQs</h1>
      </div>
      <div className="flex flex-col ">
        {faqList.map((faq, index) => (
          <div key={index}>
            <Accordion
              faq={faq}
              key={index}
              isLastItem={index === faqList.length - 1}
              
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
