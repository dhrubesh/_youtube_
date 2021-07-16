import { atom } from "recoil";
import { Types } from "../module/constant";

export const boringActivities = atom({
  key: "bored-state",
  default: [],
});

export const selectedActivityType = atom({
  key: "selected-type",
  default: Types[0],
});
