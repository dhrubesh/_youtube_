import { selector } from "recoil";
import { boringActivities, selectedActivityType } from "./atoms";
import { Types } from "../module/constant";

export const filteredBoringActivities = selector({
  key: "filteredBoringActivities",
  get: ({ get }) => {
    const filter = get(selectedActivityType);
    const list = get(boringActivities);
    if (filter === Types[0]) {
      // all
      return list;
    } else {
      return list.filter((item) => item.type === filter);
    }
  },
});
