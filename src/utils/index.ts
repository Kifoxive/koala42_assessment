import { ITable } from "redux/items/types";

export const searchTree = (id: string) => {
  return function filterTree(item: ITable) {
    if (item.data.ID === id) {
      return false;
    } else {
      const nestedObject = Object.keys(item.children)[0];
      if (item.children[nestedObject]) {
        item.children[nestedObject].records =
          item.children[nestedObject].records.filter(filterTree);
      }
      return true;
    }
  };
};
