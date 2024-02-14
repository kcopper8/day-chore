type IChoreStorage = {
  [name: string]: any;
};

export const ApiContext = {
  storage: globalThis.localStorage as IChoreStorage,
} as {
  storage: IChoreStorage;
};
