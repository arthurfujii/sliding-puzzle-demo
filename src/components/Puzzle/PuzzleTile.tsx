import Image from "next/image";
import React from "react";
import { PuzzleTileProps } from "./types";
import ClassNames from "@/styles/styles";

const PuzzleTile: React.FC<PuzzleTileProps> = (props: PuzzleTileProps) => {
  const { id, imageSrc, label, handleClick } = props;
  const isEmpty = imageSrc === undefined;

  return (
    <div className={ClassNames.puzzleTileContainer} onClick={handleClick}>
      <div className={ClassNames.puzzleTile}>
        {isEmpty ? (
          <div />
        ) : (
          <Image
            src={imageSrc}
            alt={`Puzzle Piece ${id}`}
            width="150"
            height="150"
          />
        )}
      </div>
      {label && <span>{label}</span>}
    </div>
  );
};

export default PuzzleTile;
