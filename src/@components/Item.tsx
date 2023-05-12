import React, { useState } from "react";

import { removeItem } from "../redux/items/slice";
import { ITable } from "../redux/items/types";
import { close, triangle } from "../assets";
import { useAppDispatch } from "../redux/hooks";
import { Table } from "../@components";

const Item: React.FC<ITable> = ({ data, children, isEven }) => {
  const [openNestedTable, setOpenNestedTable] = useState(false);
  const dispatch = useAppDispatch();

  const onClickRemove = (e: any) => {
    e.stopPropagation();
    dispatch(removeItem(data.ID));
  };

  // whether "has_nemesis" or "has_secrete"
  const nestedObject = Object.keys(children)[0];

  const valuesArray = Object.values(data);
  return (
    <div className={`${isEven ? "bg-[#2C2C2C]" : "bg-[#171717]"} w-max`}>
      {/* row of values */}
      <div
        onClick={() => setOpenNestedTable((prev) => !prev)}
        className="flex flex-row items-center gap-4 cursor-pointer"
      >
        {/* show nested table button */}
        <div className="w-[80px] flex justify-center items-center h-[40px] p-2">
          {children[nestedObject]?.records.length > 0 && (
            <p>
              <img
                className={`${
                  openNestedTable && "rotate-90"
                } w-[12px] flex-1 transition-all`}
                src={triangle}
                alt="triangle"
              />
            </p>
          )}
        </div>

        {valuesArray.map((value, index) => (
          <div className="w-[80px] p-2 text-center" key={index}>
            <p className="text-[1.2rem] text-white">{value}</p>
          </div>
        ))}

        {/* delete item button*/}
        <div className="w-[80px] flex justify-center">
          <button
            onClick={(e) => onClickRemove(e)}
            className="relative hover:top-1 p-4"
          >
            <img
              className={`${openNestedTable && "rotate-90"} w-[16px] flex-1`}
              src={close}
              alt="cross"
            />
          </button>
        </div>
      </div>

      {/* nested rows */}
      <div className="pl-[50px]">
        {children[nestedObject]?.records.length > 0 && openNestedTable && (
          <Table items={children[nestedObject].records} />
        )}
      </div>
    </div>
  );
};

export default Item;
