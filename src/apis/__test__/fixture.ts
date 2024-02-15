import { ApiContext } from "../apiContext.ts";
import { createChore, getChores } from "../choreApis.ts";

export const prepareClearStorage = async () => {
  ApiContext.storage = {};
};

/**
 * "test" 라는 1개의 chore 를 가지는 store 준비
 *
 * example : `const [{ id }] = await prepareOneChoreStorage();`
 */
export const prepareOneChoreStorage = async () => {
  await prepareClearStorage();

  await createChore({
    title: "test",
  });

  return getChores();
};
