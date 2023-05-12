import React, { useEffect } from "react";

import { setAllItems } from "../redux/items/slice";
import { data } from "../constants/index";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getAllItems } from "../redux/items/selectors";
import { Table } from "../@components";

const Home = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(getAllItems);

  useEffect(() => {
    dispatch(setAllItems(data));
  }, []);

  return (
    <div className="flex flex-col w-max bg-black">
      <Table items={items} />
    </div>
  );
};

export default Home;
