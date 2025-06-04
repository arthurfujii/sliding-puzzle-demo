import classNames from "classnames";
import React from "react";
import * as RadixAvatar from "@radix-ui/react-avatar";
import { AvatarProps } from "./types";
import { css } from "../../../styled-system/css";
import { flex } from "../../../styled-system/patterns";

const Avatar = (props: AvatarProps) => {
  const { id, image, active = false, handleClick } = props;
  const { src, alt } = image;
  const Root = classNames(
    flex({ align: "center", justify: "center" }),
    css({
      borderRadius: "50%",
      overflow: "hidden",
      userSelect: "none",
      w: "full",
      h: "full",
      cursor: "pointer",
      transition: "transform .2s ease-in-out",
      lg: {
        w: "150px",
        h: "150px",
        _hover: { transform: "scale(1.1)" },
      },
    })
  );
  const RootActive = css({ border: "4px solid #fff" });
  const Image = css({
    borderRadius: "inherit",
    objectFit: "cover",
    h: "full",
    w: "full",
  });
  const Classnames = {
    Image,
    Root,
    RootActive,
  };

  const classNameAvatar = classNames(
    Classnames.Root,
    active ? Classnames.RootActive : false
  );

  return (
    <RadixAvatar.Root 
      className={classNameAvatar}
      onClick={() => handleClick(src, id)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick(src, id);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Select ${alt} avatar`}
      aria-pressed={active}
    >
      <RadixAvatar.Image className={Classnames.Image} src={src} alt={alt} />
      <RadixAvatar.Fallback className="AvatarFallback" delayMs={600}>
        CT
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  );
};

export default Avatar;