import React from "react";
import { filteredBoringActivities } from "../store/selectors";
import { useRecoilValue } from "recoil";
import { Box } from "@material-ui/core";

const ActivityList = () => {
  const activities = useRecoilValue(filteredBoringActivities);
  return (
    <Box m={12} display="flex" flexWrap="wrap">
      {activities.length > 0 ? (
        activities.map(({ key, activity }) => (
          <Box key={key} bgcolor="black" color="darkGrey" p={5} m={2}>
            {activity}
          </Box>
        ))
      ) : (
        <Box
          bgcolor="black"
          color="darkGrey"
          border={2}
          borderColor="red"
          p={5}
          m={2}
        >
          No Data yet
        </Box>
      )}
    </Box>
  );
};

export default ActivityList;
