import React from "react";
import { Types as ActivityTypes } from "./constant";
import { Button, ButtonGroup } from "@material-ui/core";
import { selectedActivityType } from "../store/atoms";
import { useRecoilState } from "recoil";

const Filters = () => {
  const [selectedType, setSelectedType] = useRecoilState(selectedActivityType);

  return (
    <ButtonGroup color="primary" aria-label="outlined primary button group">
      {ActivityTypes.map((type) => {
        return (
          <Button
            color={selectedType === type ? "primary" : "default"}
            key={type}
            onClick={() => {
              setSelectedType(type);
            }}
          >
            {type}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default Filters;
