import React, { useState } from "react";

const Box = (props) => {
  const handleBox = () => {
    props.clickBox(props.id)
  };

  return (
    <div className="grid grid-cols-2  px-5 gap-2 my-2  ">
      <button
        onClick={handleBox}
        className="shadow col-span-2 py-3 active:scale-90 duration-200 flex justify-between p-5 gap-10 items-center bg-blue-200 rounded-lg"
      >
        <span className="">{props.question} </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 ${props.hide && "rotate-180"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 15.75 7.5-7.5 7.5 7.5"
          />
        </svg>

        {/* {hide ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 18.75 7.5-7.5 7.5 7.5"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
            />
          </svg>
        )} */}
      </button>
      {/* <button
        onClick={() => {
          setHide(false);
        }}
        className="col-span-1 py-3 active:scale-90 duration-200 bg-orange-200 rounded-lg "
      >
        open
      </button>
      <button
        onClick={() => {
          setHide(true);
        }}
        className="col-span-1 py-3 active:scale-90 duration-200 bg-blue-200 rounded-lg"
      >
        close
      </button> */}
      <div
        className={`p-5 shadow-sm ${
          props.hide && "hidden"
        } rounded-lg bg-gray-200 col-span-2`}
      >
        <p>{props.answer}</p>
      </div>
    </div>
  );
};

export default Box;
