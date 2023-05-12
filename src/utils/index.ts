import { ITable } from "redux/items/types";

export const deleteItem = (items: ITable[], id: string): ITable[] => {
  // cycle through each element
  for (let i = 0; i < items.length; i++) {
    if (findItem(items[i], i, items)) break;
  }
  return items;

  // recursive function
  function findItem(item: ITable, index: number, array: ITable[]): boolean {
    let result: boolean = false;

    if (item.data.ID === id) {
      array = array.splice(index, 1);
      result = true;
    } else {
      const nestedObject = Object.keys(item.children)[0];
      if (item.children[nestedObject]) {
        for (let i = 0; i < item.children[nestedObject].records.length; i++) {
          if (
            findItem(
              item.children[nestedObject].records[i],
              i,
              item.children[nestedObject].records
            )
          ) {
            result = true;
            break;
          }
        }
      }
    }
    return result;
  }
};
