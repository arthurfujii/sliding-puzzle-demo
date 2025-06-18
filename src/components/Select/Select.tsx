import { Select as RadixSelect } from "radix-ui";
import { ChevronDownIcon, CheckIcon } from "@radix-ui/react-icons";
import React from "react";
import ClassNames from "@/styles/styles";

export interface SelectProps {
  onSelect: (value: string) => void;
  items: { name: string; value: string }[];
}

const Select = (props: SelectProps) => {
  const { items, onSelect } = props;
  return (
    <RadixSelect.Root onValueChange={onSelect}>
      <RadixSelect.Trigger className={ClassNames.selectTrigger}>
        <RadixSelect.Value placeholder="Select timer" />
        <RadixSelect.Icon>
          <ChevronDownIcon />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Content className={ClassNames.selectContent}>
        <RadixSelect.Viewport className={ClassNames.selectViewport}>
          {items.map((item, index) => {
            return (
              <RadixSelect.Item
                value={item.value}
                key={index}
                className={ClassNames.selectItem}
              >
                <RadixSelect.ItemIndicator
                  className={ClassNames.selectItemIndicator}
                >
                  <CheckIcon />
                </RadixSelect.ItemIndicator>
                <RadixSelect.ItemText>{item.name}</RadixSelect.ItemText>
              </RadixSelect.Item>
            );
          })}
        </RadixSelect.Viewport>
        <RadixSelect.Arrow />
      </RadixSelect.Content>
    </RadixSelect.Root>
  );
};

export default Select;
