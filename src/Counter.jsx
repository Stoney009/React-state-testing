import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleAddBtn = () => {
    console.log("U add");
    setCount(count + 1);
  };
  const handleSubBtn = () => {
    console.log("U sub");
    count > 0 && setCount(count - 1);
  };
  return (
    <div className="grid grid-cols-2 p-5 gap-5 ">
      <h1 className="text-4xl font-bold col-span-2 py-5 text-center rounded-lg border border-gray-700">
        {count}
      </h1>
      <button
        onClick={handleSubBtn}
        className="col-span-1 py-3 active:scale-90 duration-200 bg-orange-300 rounded-lg "
      >
        Sub
      </button>
      <button
        onClick={handleAddBtn}
        className="col-span-1 py-3 active:scale-90 duration-200 bg-orange-300 rounded-lg"
      >
        Add
      </button>
    </div>
  );
};

export default Counter;
