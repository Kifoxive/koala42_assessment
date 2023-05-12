import React from "react";

import { ITable } from "../redux/items/types";
import Item from "./Item";

const Table: React.FC<{ items: ITable[] }> = ({ items }) => {
  let counter = 0;

  return (
    <div>
      {/* description row */}
      {items.length > 0 && (
        <div className="flex items-center bg-eucalipto gap-4 w-max">
          <div className="w-[100px] h-[50px] p-2" />
          {Object.keys(items[0]?.data).map((value, index) => (
            <div
              className="w-[100px] p-2 text-center text-[1.4rem] text-black"
              key={index}
            >
              <p>{value}</p>
            </div>
          ))}
          <div className="w-[100px] p-2 text-center text-[1.4rem] text-black">
            <p>Delete</p>
          </div>
        </div>
      )}
      {/* tables row */}
      <div>
        {items.map((item) => {
          const isEven = counter++ % 2 === 0;
          return <Item key={item.data.ID} {...item} isEven={isEven} />;
        })}
      </div>
    </div>
  );
};

export default Table;
