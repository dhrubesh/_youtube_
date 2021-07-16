import React from "react";
import axios from "axios";
import { Types } from "./constant";
import { useRecoilState, useRecoilValue } from "recoil";
import { boringActivities, selectedActivityType } from "../store/atoms";
import { Button, Box } from "@material-ui/core";

const Actions = () => {
  const selectedType = useRecoilValue(selectedActivityType);
  const setActivities = useRecoilState(boringActivities)[1];
  const generateRandomActivities = () => {
    const type = selectedType === Types[0] ? "" : selectedType;
    axios
      .get(`http://www.boredapi.com/api/activity/?type=${type}`)
      .then((res) => res.data)
      .then((res) => {
        setActivities((activities) => [...activities, res]);
      });
  };

  return (
    <Box display="flex" m={12}>
      <Button color="primary" onClick={generateRandomActivities}>
        Generate Random Activities
      </Button>
      <Button
        color="primary"
        onClick={() => {
          setActivities([]);
        }}
      >
        Reset data
      </Button>
    </Box>
  );
};

export default Actions;
