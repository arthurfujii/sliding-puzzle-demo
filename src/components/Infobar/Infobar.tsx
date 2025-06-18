import React from "react";
import { InfobarProps } from "./types";
import { Toolbar } from "radix-ui";
import { Timer } from "./Timer";
import ClassNames from "../../styles/styles";

const Infobar = (props: InfobarProps) => {
  const { moves, timer, handleRestartClick, setTimeRemaining } = props;

  // @TODO: Add Radix Toolbar here.

  return (
    <Toolbar.Root className={ClassNames.toolbarRoot}>
      <Toolbar.ToggleGroup type="single">
        <Toolbar.ToggleItem value="left">
          <strong>Moves:</strong>
          {` ${moves}`}
        </Toolbar.ToggleItem>
      </Toolbar.ToggleGroup>
      <Toolbar.ToggleGroup type="single">
        <Toolbar.ToggleItem value="center">
          <Timer setTimeRemaining={setTimeRemaining} startTime={timer} />
        </Toolbar.ToggleItem>
      </Toolbar.ToggleGroup>
      <Toolbar.Button
        className={ClassNames.toolbarButton}
        onClick={handleRestartClick}
      >
        Restart
      </Toolbar.Button>
    </Toolbar.Root>
  );
};

export default Infobar;
