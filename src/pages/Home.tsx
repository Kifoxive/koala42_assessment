import React, { useEffect } from "react";

import { setAllItems } from "../redux/items/slice";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getAllItems } from "../redux/items/selectors";
import { Table } from "../@components";
import { dataJson } from "../data";
import { ITable } from "../redux/items/types";

const Home = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(getAllItems);

  useEffect(() => {
    dispatch(setAllItems(dataJson as ITable[]));
  }, []);

  return (
    <div className="flex flex-col w-max bg-black overflow-auto">
      <Table items={items} />
    </div>
  );
};

export default Home;
