import { ApiContext } from "./apiContext.ts";

const getStorageVersion = () => {
  return ApiContext.storage.version;
};

const migrateTo001 = () => {
  const choreDateList = JSON.parse(ApiContext.storage.choreDateList);
  choreDateList.forEach((choreDate: string) => {
    const dayChoreMapData = ApiContext.storage[`chore-${choreDate}`];
    if (!dayChoreMapData) {
      return;
    }
    const dayChoreMap = JSON.parse(dayChoreMapData);

    Object.keys(dayChoreMap).forEach((dayChoreKey) => {
      dayChoreMap[dayChoreKey] = {
        completed: dayChoreMap[dayChoreKey],
      };
    });

    ApiContext.storage[`chore-${choreDate}`] = JSON.stringify(dayChoreMap);
  });
  ApiContext.storage.version = "0.0.1";
};

export const initialize = async () => {
  const version = getStorageVersion();
  if (version !== "0.0.1") {
    // do migration
    migrateTo001();
  }
};
