import { PuzzleConfigsProps } from "./types";
import { HoverCard } from "../HoverCard";
import { Switch } from "../Switch";
import ClassNames from "@/styles/styles";

const PuzzleConfigs = (props: PuzzleConfigsProps) => {
  const { toggleMirror, toggleTilesNumbers } = props;

  return (
    <>
      {/* @TODO: Add a Radix slider to control number of tiles, if you wish. */}

      <div className={ClassNames.puzzleConfigsItem}>
        <Switch
          id="switch-tile-number-display"
          label="Show Tiles Numbers"
          handleChange={toggleTilesNumbers}
        />
        <HoverCard
          triggerText="?"
          content="Switch configuration to display the number of the piece over each tile. This is a helper for the players."
        />
      </div>
      <div className={ClassNames.deviceDesktopOnly}>
        <div className={ClassNames.puzzleConfigsItem}>
          <Switch
            id="switch-mirror-display"
            label="Display Mirror"
            handleChange={toggleMirror}
            defaultChecked={true}
          />
          <HoverCard
            triggerText="?"
            content="Switch configuration to display the original image. This is a helper for the players."
          />
        </div>
      </div>
      {/* @TODO: Add a Radix select for the timer, if you wish. */}
    </>
  );
};

export default PuzzleConfigs;
