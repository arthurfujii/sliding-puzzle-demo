import * as RadixSwitch from "@radix-ui/react-switch";
import React from "react";
import { SwitchProps } from "./types";
import ClassNames from "@/styles/styles";

const Switch = (props: SwitchProps) => {
  const { id, defaultChecked, label, handleChange } = props;

  return (
    <form>
      <div className={ClassNames.switchContainer}>
        <label className={ClassNames.switchLabel} htmlFor={id}>
          {label}
        </label>
        <RadixSwitch.Root
          className={ClassNames.switchRoot}
          id={id}
          defaultChecked={defaultChecked}
          onCheckedChange={handleChange}
        >
          <RadixSwitch.Thumb className={ClassNames.switchThumb} />
        </RadixSwitch.Root>
      </div>
    </form>
  );
};

export default Switch;
