export interface IItemsSliceState {
  allItems: ITable[];
}

export interface ITable {
  data: {
    [key: string]: string;
  };
  children: {
    [key: string]: {
      records: ITable[];
    };
  };
  isEven?: boolean;
  // idOrder: string[];
}
